import {AuditableEntity} from "../Common/AuditableEntity";
import {User} from "../User/User";
import {JobStatusService} from "./JobStatusService";
import {JobStatusEnum} from "./JobStatusEnum";
import {JobStatus} from "./JobStatus";
import {Application} from "../Application/Application";
import {PaymentMethod} from "../User/PaymentMethod";
import {Activity} from "./Activity";

export class Job extends AuditableEntity {
	public title: string;
	public description: string;
	public acceptanceCriteria: string;
	public requirements: string;
	public paymentAmount: number;
	public status?: JobStatus;
	public paymentMethods: PaymentMethod[] = [];
	public applications: Application[] = [];
	public get activity(): Activity[] {
		return this._activity;
	}

	private _activity: Activity[] = [];

	constructor(
		id: string,
		title: string,
		description: string,
		acceptanceCriteria: string,
		requirements: string,
		paymentAmount: number,
		paymentMethods: PaymentMethod[],
		createdBy: User,
		createdDate: Date,
		status?: JobStatus,
		applications: Application[] = []
	) {
		super(id, createdBy.id, createdDate);

		this.title = title;
		this.description = description;
		this.acceptanceCriteria = acceptanceCriteria;
		this.requirements = requirements;
		this.paymentAmount = paymentAmount;
		this.paymentMethods = paymentMethods;
		this.applications = applications;

		if (!status) {
			const jobStatusService = new JobStatusService();

			this.status = jobStatusService.getDefault();
		}
	}

	public apply(id: string, user: User) {
		const application = new Application(id, user);

		if (!this.applications) {
			this.applications = [];
		}

		this.applications.push(application);
	}

	public start(user: User): void {
		this.setStatus(JobStatusEnum.InProgress, user);
	}

	public pause(user: User): void {
		this.setStatus(JobStatusEnum.Paused, user);
	}

	public cancel(user: User): void {
		this.setStatus(JobStatusEnum.Cancelled, user);
	}

	public complete(user: User): void {
		this.setStatus(JobStatusEnum.Completed, user);
	}

	setStatus(code: JobStatusEnum, user: User) {
		const jobStatusService = new JobStatusService();
		const jobStatus = jobStatusService.getJobStatusByCode(code);

		this.status = jobStatusService.getJobStatusByCode(code);

		this.addActivity(jobStatus, new Date(), user);
	}

	private addActivity(
		status: JobStatus,
		date: Date,
		actor: User
	) {
		if (!this._activity) {
			this._activity = [];
		}

		this._activity.push(new Activity(status, date, actor));
	}
}
