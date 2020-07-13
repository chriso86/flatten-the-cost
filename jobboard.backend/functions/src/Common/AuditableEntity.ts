import {BaseEntity} from "./BaseEntity";
import {Flag} from "./Flag";

export class AuditableEntity extends BaseEntity {
	public createdBy?: string;
	public createdDate?: Date;

	public updatedBy?: string;
	public updatedDate?: Date;

	public isRemoved?: boolean;
	public removedBy?: string;
	public removedDate?: Date;

	public flags: Flag[] = [];

	constructor(
		id: string,
		createdByUserId: string = 'SYSTEM',
		createdDate: Date = new Date()
	) {
		super(id);

		this.createdBy = createdByUserId;
		this.createdDate = createdDate;
	}

	setUpdated(updatedByUserId: string) {
		this.updatedBy = updatedByUserId;
		this.updatedDate = new Date();
	}

	setRemoved(removedByUserId: string) {
		this.isRemoved = true;
		this.removedBy = removedByUserId;
		this.removedDate = new Date();
	}

	flag(userId: string, flaggedDate: Date) {
		if (!this.flags) {
			this.flags = [];
		}

		this.flags.push(new Flag(userId, flaggedDate));
	}

	unFlag(userId: string) {
		const flagIndex = this.flags.findIndex(f => f.flaggedBy === userId);

		if (flagIndex > -1) {
			this.flags.splice(flagIndex, 1);
		}
	}
}
