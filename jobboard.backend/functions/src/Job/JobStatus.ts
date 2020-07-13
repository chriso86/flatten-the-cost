import {JobStatusEnum} from "./JobStatusEnum";

export class JobStatus {
	id: number;
	name: string;
	code: JobStatusEnum;

	constructor(
		id: number,
		name: string,
		code: JobStatusEnum
	) {
		this.id = id;
		this.name = name;
		this.code = code;
	}
}
