import {BaseClassConverter} from "../Common/BaseClassConverter";
import {User} from "./User";
import {PaymentMethod} from "./PaymentMethod";

export class UserClassConverter  extends BaseClassConverter<User> {
	fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): User {
		const user = snapshot.data()!;
		const paymentMethods = user.paymentMethods
			.map((paymentMethod: PaymentMethod) => new PaymentMethod(
				paymentMethod.id,
				paymentMethod.name,
				paymentMethod.code
			));

		return new User(
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
			user.yearsActive,
			paymentMethods
		);
	}
}
