import * as firebase from "firebase";

export abstract class BaseClassConverter<T> {
	toFirestore(entity: T): firebase.firestore.DocumentData {
		const stringifier = JSON.stringify(entity);

		return JSON.parse(stringifier);
	}

	fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): T {
		return {} as T;
	}
}
