import {PaymentMethodEnum} from "./PaymentMethodEnum";

export class PaymentMethod {
	id: number;
	name: string;
	code: PaymentMethodEnum

	constructor(
		id: number,
		name: string,
		code: PaymentMethodEnum
	) {
		this.id = id;
		this.name = name;
		this.code = code;
	}
}
