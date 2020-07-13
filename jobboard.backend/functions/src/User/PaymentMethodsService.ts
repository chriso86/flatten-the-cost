import {PaymentMethodEnum} from "./PaymentMethodEnum";
import {PaymentMethod} from "./PaymentMethod";

export class PaymentMethodService {
	public paymentMethods: PaymentMethod[] = [
		new PaymentMethod(1, 'PayPal', PaymentMethodEnum.PayPal),
		new PaymentMethod(2, 'EFT', PaymentMethodEnum.EFT)
	];

	getDefault(): PaymentMethod {
		return this.getPaymentMethodByCode(PaymentMethodEnum.PayPal);
	}

	getPaymentMethodByCode(code: PaymentMethodEnum): PaymentMethod {
		const matching = this.paymentMethods.find(s => s.code === code);

		if (!matching) {
			throw new Error('No Payment Method found matching code: ' + code);
		}

		return matching;
	}
}
