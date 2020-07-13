import {BaseRest} from '../Http/BaseRest';
import {Job} from './Job';
import { Response } from 'firebase-functions';
import * as admin from 'firebase-admin';
import {
    JOB_DOESNT_EXIST,
    MISSING_JOB, MISSING_JOB_ID,
    UNEXPECTED_EXCEPTION
} from "../Exceptions/ApplicationExceptions";
import {Exception} from "../Exceptions/Exception";
import {JobClassConverter} from "./JobClassConverter";

export class JobController extends BaseRest<Job> {
    constructor() {
        const converter = new JobClassConverter();

        super('jobs', converter);
    }

    public createJob(job: Job, response: Response) {
        if (!job) {
            const error = MISSING_JOB;

            error.entity = 'Job';
            error.method = 'updateJob';

            response.send(error);

            return;
        }

        this.add(job)
            .then((id: string) => {
                response.send(id);
            })
            .catch(ex => {
                const error = JobController.getUnexpectedException('createJob', ex);

                response.send(error);
            });
    }

    public getAllJobsForProject(projectId: string, response: Response) {
        if (!projectId) {
            const error = MISSING_JOB_ID;

            error.entity = 'Job';
            error.method = 'getJobs';

            response.send(error);

            return;
        }

        this.collection
            .where('projectId', '==', projectId)
            .get()
            .then((snapshot: admin.firestore.QuerySnapshot) => {
                const docs = snapshot.docs;
                let jobs: Job[] = [];

                if (docs && docs.length) {
                    jobs = docs.map(doc => doc.data() as Job);
                }

                response.send(jobs);
            })
            .catch(ex => {
                const error = JobController.getUnexpectedException('getJobs', ex);

                response.send(error);
            });
    }

    public getJobById(id: string, response: Response) {
        if (!id) {
            const error = MISSING_JOB_ID;

            error.entity = 'Job';
            error.method = 'getJob';

            response.send(error);

            return;
        }

        this.getOne(id)
            .then((job: Job | null) => {
                if (!job) {
                    const error = JOB_DOESNT_EXIST;

                    error.entity = 'Job';
                    error.method = 'getJob';

                    response.send(error);

                    return;
                }

                response.send(job);
            })
            .catch(ex => {
                const error = JobController.getUnexpectedException('getJob', ex);

                response.send(error);
            });
    }

    public updateJob(job: Job, response: Response) {
        if (!job) {
            const error = MISSING_JOB;

            error.entity = 'Job';
            error.method = 'updateJob';

            response.send(error);

            return;
        }

        this.update(job, job.id)
            .then(_ => {
                response.send(true);
            })
            .catch(ex => {
                const error = JobController.getUnexpectedException('updateJob', ex);

                response.send(error);
            });
    }

    public removeJob(id: string, response: Response) {
        if (!id) {
            const error = MISSING_JOB_ID;

            error.entity = 'Job';
            error.method = 'getJob';

            response.send(error);

            return;
        }

        this.remove(id)
            .then((result: boolean) => {
                response.send(result);
            })
            .catch(ex => {
                const error = JobController.getUnexpectedException('removeJob', ex);

                response.send(error);
            });
    }

    private static getUnexpectedException(method: string, error: Error): Exception {
        const exception = UNEXPECTED_EXCEPTION;

        exception.entity = 'Job';
        exception.method = method;
        exception.stack = error && error.stack;

        return exception;
    }
}
