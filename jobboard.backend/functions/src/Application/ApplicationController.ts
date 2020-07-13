import {BaseRest} from '../Http/BaseRest';
import {Application} from './Application';
import { Response } from 'firebase-functions';
import * as admin from 'firebase-admin';
import {
    APPLICATION_DOESNT_EXIST,
    MISSING_APPLICATION, MISSING_APPLICATION_ID,
    UNEXPECTED_EXCEPTION
} from "../Exceptions/ApplicationExceptions";
import {Exception} from "../Exceptions/Exception";
import {ApplicationClassConverter} from "./ApplicationClassConverter";

export class ApplicationController extends BaseRest<Application> {
    converter: ApplicationClassConverter;

    constructor() {
        super('applications');

        this.converter = new ApplicationClassConverter();
    }

    public createApplication(application: Application, response: Response) {
        if (!application) {
            const error = MISSING_APPLICATION;

            error.entity = 'Application';
            error.method = 'updateApplication';

            response.send(error);

            return;
        }

        this.add(application)
            .then((id: string) => {
                response.send(id);
            })
            .catch(ex => {
                const error = ApplicationController.getUnexpectedException('createApplication', ex);

                response.send(error);
            });
    }

    public getAllApplicationsForProject(projectId: string, response: Response) {
        if (!projectId) {
            const error = MISSING_APPLICATION_ID;

            error.entity = 'Application';
            error.method = 'getApplications';

            response.send(error);

            return;
        }

        this.collection
            .where('projectId', '==', projectId)
            .get()
            .then((snapshot: admin.firestore.QuerySnapshot) => {
                const docs = snapshot.docs;
                let applications: Application[] = [];

                if (docs && docs.length) {
                    applications = docs.map(doc => doc.data() as Application);
                }

                response.send(applications);
            })
            .catch(ex => {
                const error = ApplicationController.getUnexpectedException('getApplications', ex);

                response.send(error);
            });
    }

    public getApplicationById(id: string, response: Response) {
        if (!id) {
            const error = MISSING_APPLICATION_ID;

            error.entity = 'Application';
            error.method = 'getApplication';

            response.send(error);

            return;
        }

        this.getOne(id)
            .then((application: Application | null) => {
                if (!application) {
                    const error = APPLICATION_DOESNT_EXIST;

                    error.entity = 'Application';
                    error.method = 'getApplication';

                    response.send(error);

                    return;
                }

                response.send(application);
            })
            .catch(ex => {
                const error = ApplicationController.getUnexpectedException('getApplication', ex);

                response.send(error);
            });
    }

    public updateApplication(application: Application, response: Response) {
        if (!application) {
            const error = MISSING_APPLICATION;

            error.entity = 'Application';
            error.method = 'updateApplication';

            response.send(error);

            return;
        }

        this.update(application, application.id)
            .then(_ => {
                response.send(true);
            })
            .catch(ex => {
                const error = ApplicationController.getUnexpectedException('updateApplication', ex);

                response.send(error);
            });
    }

    public removeApplication(id: string, response: Response) {
        if (!id) {
            const error = MISSING_APPLICATION_ID;

            error.entity = 'Application';
            error.method = 'getApplication';

            response.send(error);

            return;
        }

        this.remove(id)
            .then((result: boolean) => {
                response.send(result);
            })
            .catch(ex => {
                const error = ApplicationController.getUnexpectedException('removeApplication', ex);

                response.send(error);
            });
    }

    private static getUnexpectedException(method: string, error: Error): Exception {
        const exception = UNEXPECTED_EXCEPTION;

        exception.entity = 'Application';
        exception.method = method;
        exception.stack = error && error.stack;

        return exception;
    }
}
