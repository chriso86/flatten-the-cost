export class Flag {
	flaggedBy: string;
	flaggedDate: Date;

	constructor(
		flaggedBy: string,
		flaggedDate: Date
	) {
		this.flaggedBy = flaggedBy;
		this.flaggedDate = flaggedDate;
	}
}
