import {User} from "../User/User";
import {AuditableEntity} from "./AuditableEntity";

export class ApprovableEntity extends AuditableEntity {
	public isApproved?: boolean;
	public approvedBy?: User;
	public approvedDate?: Date;

	public isRejected?: boolean;
	public rejectedBy?: User;
	public rejectedDate?: Date;

	constructor(id: string) {
		super(id);
	}

	approve(approvedBy: User) {
		if (this.isRejected) {
			this.isRejected = false;
		}

		this.approvedBy = approvedBy;
		this.approvedDate = new Date();
	}

	reject(rejectedBy: User) {
		if (this.isApproved) {
			this.isApproved = false;
		}

		this.rejectedBy = rejectedBy;
		this.rejectedDate = new Date();
	}
}
