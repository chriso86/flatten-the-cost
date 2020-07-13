import {Job} from "../Job/Job";
import {PaymentMethod} from "./PaymentMethod";

export interface IEmployer {
	username: string;
	companyName?: string;
	yearsActive?: number;
	email?: string;
	phoneNumber?: string;
	cellNumber?: string;
	address1?: string;
	address2?: string;
	city?: string;
	country?: string;
	paymentMethods?: PaymentMethod[];
	jobs?: Job[];

	createJob(
		id: string,
		title: string,
		description: string,
		acceptanceCriteria: string,
		requirements: string,
		paymentAmount: number,
		paymentMethods: PaymentMethod[]
	): Job;
}
