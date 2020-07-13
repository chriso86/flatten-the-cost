import {AuditableEntity} from "../Common/AuditableEntity";
import {IWorker} from "./IWorker";
import {IEmployer} from "./IEmployer";
import {Application} from "../Application/Application";
import {Job} from "../Job/Job";
import {PaymentMethod} from "./PaymentMethod";
import {PaymentMethodService} from "./PaymentMethodsService";

export class User extends AuditableEntity implements IWorker, IEmployer {
    public username: string;
    public firstName?: string;
    public lastName?: string;
    public companyName?: string;
    public email?: string;
    public phoneNumber?: string;
    public cellNumber?: string;
    public city?: string;
    public country?: string;
    public jobTitle?: string;
    public yearsActive?: number;
    public paymentMethods: PaymentMethod[] = [];
    public applications: Application[] = [];
    public jobs: Job[] = [];

    constructor(
        id: string,
        username: string,
        firstName: string = '',
        lastName: string = '',
        email: string = '',
        phoneNumber: string = '',
        cellNumber: string = '',
        city: string = '',
        country: string = '',
        jobTitle: string = '',
        companyName: string = '',
        yearsActive: number = 0,
        paymentMethods: PaymentMethod[] = [],
        applications: Application[] = [],
        jobs: Job[] = []
    ) {
        super(id);

        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.yearsActive = yearsActive;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.cellNumber = cellNumber;
        this.city = city;
        this.country = country;
        this.paymentMethods = paymentMethods;
        this.applications = applications;
        this.jobs = jobs;
    }

    public createJob(
        id: string,
        title: string,
        description: string,
        acceptanceCriteria: string,
        requirements: string,
        paymentAmount: number,
        paymentMethods: PaymentMethod[]
    ): Job {
        let paymentMethodsValues = paymentMethods;

        if (!paymentMethods) {
            const paymentMethodService = new PaymentMethodService();
            const defaultPaymentMethod = paymentMethodService.getDefault();

            paymentMethodsValues = [defaultPaymentMethod];
        }

        const job = new Job(
            id,
            title,
            description,
            acceptanceCriteria,
            requirements,
            paymentAmount,
            paymentMethodsValues,
            this,
            new Date()
        );

        if (!this.jobs) {
            this.jobs = [];
        }

        this.jobs.push(job);

        return job;
    }
}
