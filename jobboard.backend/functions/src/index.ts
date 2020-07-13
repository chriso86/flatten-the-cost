import {ApplicationController} from './Application/ApplicationController';
import { Request, Response, https} from 'firebase-functions';
import {Application} from './Application/Application';

// Applications
const applicationController = new ApplicationController();

export const createApplication = https.onRequest((request: Request, response: Response<string>) => {
    applicationController.createApplication(request.body.application, response);
});
export const updateApplication = https.onRequest((request: Request, response: Response<boolean>) => {
    applicationController.updateApplication(request.body.application, response);
});
export const getApplications = https.onRequest((request: Request, response: Response<Application[]>) => {
    applicationController.getAllApplicationsForProject(request.query.projectId as string, response);
});
export const getApplication = https.onRequest((request: Request, response: Response<Application>) => {
    applicationController.getApplicationById(request.query.id as string, response);
});
export const removeApplication = https.onRequest((request: Request, response: Response<boolean>) => {
    applicationController.removeApplication(request.query.id as string, response);
});
