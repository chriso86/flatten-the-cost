import {JobStatusEnum} from "./JobStatusEnum";
import {JobStatus} from "./JobStatus";

export class JobStatusService {
	public statuses: JobStatus[] = [
		new JobStatus(1, 'Pending', JobStatusEnum.Pending),
		new JobStatus(2, 'In-Progress', JobStatusEnum.InProgress),
		new JobStatus(3, 'Paused', JobStatusEnum.Paused),
		new JobStatus(4, 'Cancelled', JobStatusEnum.Cancelled),
		new JobStatus( 5, 'Completed', JobStatusEnum.Completed)
	];

	getDefault(): JobStatus {
		return this.getJobStatusByCode(JobStatusEnum.Pending);
	}

	public getJobStatusByCode(code: JobStatusEnum): JobStatus {
		const matching = this.statuses.find(s => s.code === code);

		if (!matching) {
			throw new Error('No Job Status found matching code: ' + code);
		}

		return matching;
	}
}
