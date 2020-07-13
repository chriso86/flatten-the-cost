import {BaseRest} from '../Http/BaseRest';
import {User} from './User';
import {Response} from 'firebase-functions';
import {
	MISSING_USER,
	MISSING_USER_ID,
	UNEXPECTED_EXCEPTION,
	USER_DOESNT_EXIST
} from "../Exceptions/ApplicationExceptions";
import {Exception} from "../Exceptions/Exception";
import {PagedRequest} from "../Common/PagedRequest";
import {IRegisterUserRequest} from "./RegisterUserRequest";
import * as firebase from 'firebase';
import {UserClassConverter} from "./UserClassConverter";

export class UserController extends BaseRest<User> {
	constructor() {
	    const converter = new UserClassConverter();

		super('users', converter);
	}

	private static getUnexpectedException(method: string, error: Error): Exception {
		const exception = UNEXPECTED_EXCEPTION;

		exception.entity = 'User';
		exception.method = method;
		exception.stack = error && error.stack;

		return exception;
	}

	public registerWithEmail(request: IRegisterUserRequest, response: Response) {
		firebase
			.auth()
			.createUserWithEmailAndPassword(request.email, request.password)
			.catch(error2 => {
				throw new Error(error2);
			});

		// this.add(user)
		// 	.then((id: string) => {
		// 		response.send(id);
		// 	})
		// 	.catch(ex => {
		// 		const error = UserController.getUnexpectedException('createUser', ex);
        //
		// 		response.send(error);
		// 	});
	}

	public login(user: User, response: Response) {

	}

	public getUsers(request: PagedRequest, response: Response) {
		const users = this.getAll(request);

        response.send(users);
	}

	public getUserById(id: string, response: Response) {
		if (!id) {
			const error = MISSING_USER_ID;

			error.entity = 'User';
			error.method = 'getUser';

			response.send(error);

			return;
		}

		this.getOne(id)
			.then((user: User | null) => {
				if (!user) {
					const error = USER_DOESNT_EXIST;

					error.entity = 'User';
					error.method = 'getUser';

					response.send(error);

					return;
				}

				response.send(user);
			})
			.catch(ex => {
				const error = UserController.getUnexpectedException('getUser', ex);

				response.send(error);
			});
	}

	public updateUser(user: User, response: Response) {
		if (!user) {
			const error = MISSING_USER;

			error.entity = 'User';
			error.method = 'updateUser';

			response.send(error);

			return;
		}

		this.update(user, user.id)
			.then(_ => {
				response.send(true);
			})
			.catch(ex => {
				const error = UserController.getUnexpectedException('updateUser', ex);

				response.send(error);
			});
	}

	public removeUser(id: string, response: Response) {
		if (!id) {
			const error = MISSING_USER_ID;

			error.entity = 'User';
			error.method = 'getUser';

			response.send(error);

			return;
		}

		this.remove(id)
			.then((result: boolean) => {
				response.send(result);
			})
			.catch(ex => {
				const error = UserController.getUnexpectedException('removeUser', ex);

				response.send(error);
			});
	}
}
