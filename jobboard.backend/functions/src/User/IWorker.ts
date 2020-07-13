import {Application} from "../Application/Application";
import {PaymentMethod} from "./PaymentMethod";

export interface IWorker {
	username: string;
	firstName?: string;
	lastName?: string;
	jobTitle?: string;
	email?: string;
	phoneNumber?: string;
	cellNumber?: string;
	city?: string;
	country?: string;
	paymentMethods: PaymentMethod[];
	applications: Application[];
}
