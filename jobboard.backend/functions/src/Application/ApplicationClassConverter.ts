import {Application} from './Application';
import * as firebase from 'firebase';
import {User} from "../User/User";
import {PaymentMethod} from "../User/PaymentMethod";

export class ApplicationClassConverter {
	toFirestore(application: Application): firebase.firestore.DocumentData {
		const stringifier = JSON.stringify(application);

		return JSON.parse(stringifier);
	}

	fromFirestore(
		snapshot: firebase.firestore.QueryDocumentSnapshot,
		options: firebase.firestore.SnapshotOptions
	): Application {
		const data = snapshot.data(options)!;
		const user: User = data.applicant;
		const paymentMethods = user.paymentMethods
			.map(u => new PaymentMethod(u.id, u.name, u.code));

		return new Application(
			data.id,
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
				user.yearsActive,
				paymentMethods
			)
		);
	}
}
