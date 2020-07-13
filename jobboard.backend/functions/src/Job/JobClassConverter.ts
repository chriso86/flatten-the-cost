import {User} from "../User/User";
import {PaymentMethod} from "../User/PaymentMethod";
import {Job} from "./Job";
import {JobStatus} from "./JobStatus";
import {Application} from "../Application/Application";
import {BaseClassConverter} from "../Common/BaseClassConverter";

export class JobClassConverter extends BaseClassConverter<Job> {
	fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): Job {
		const job = snapshot.data()!;
		const status = job.status;
		const createdBy: User = job.createdBy;
		const paymentMethods = job.paymentMethods
			.map((paymentMethod: PaymentMethod) => new PaymentMethod(paymentMethod.id, paymentMethod.name, paymentMethod.code));
		const applications = job.applications
			.map((application: Application) => {
				const user = application.applicant;

				new Application(
					application.id,
					new User(
						user.id,
						user.username,
						user.firstName,
						user.lastName,
						user.email,
						user.phoneNumber,
						user.cellNumber,
						user.city,
						user.country,
						user.jobTitle,
						user.companyName,
						user.yearsActive
					)
				)
			});

		return new Job(
			job.id,
			job.title,
			job.description,
			job.acceptanceCriteria,
			job.requirements,
			job.paymentAmount,
			paymentMethods,
			new User(
				createdBy.id,
				createdBy.username,
				createdBy.firstName,
				createdBy.lastName,
				createdBy.email,
				createdBy.phoneNumber,
				createdBy.cellNumber,
				createdBy.city,
				createdBy.country,
				createdBy.jobTitle,
				createdBy.companyName,
				createdBy.yearsActive
			),
			job.createdDate,
			new JobStatus(
				status.id,
				status.name,
				status.code
			),
			applications
		)
	}
}
