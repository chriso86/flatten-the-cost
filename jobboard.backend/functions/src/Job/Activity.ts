import {JobStatus} from "./JobStatus";
import {User} from "../User/User";

export class Activity {
	public status: JobStatus;
	public date: Date;
	public actor: User;

	constructor(
		status: JobStatus,
		date: Date,
		actor: User
	) {
		this.status = status;
		this.date = date;
		this.actor = actor;
	}
}
