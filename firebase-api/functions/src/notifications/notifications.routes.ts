import * as express from "express";
import {JsonResponse} from "../global/models/json-response.model";
import {NotificationModel} from "./models/notification.model";
import {NotificationsGateway} from "./gateways/notifications.gateway";
import {Request, Response} from "firebase-functions";
import {PAGING} from "../global/constants";
import {calculatePagingStart} from "../global/helpers/paging";

export const notificationsRouter = express.Router();
const notificationsGateway: NotificationsGateway = new NotificationsGateway();

/**
 * Get a list of notifications for a user
 *
 * @param {string} userId                   The user ID for whom to fetch the notifications
 * @param {string} pageSize                 The number of items on a page
 * @param {string} pageNo                   The page number to get
 */
notificationsRouter.get('/GetNotificationsForUser', (request: Request, response: Response) => {
    // Return multiple tags
    const userId = request.query.userId;
    const pageSize: number = parseInt(request.query.pageSize|| PAGING.pageSize);
    const pageNo: number = parseInt(request.query.pageNo || PAGING.firstPageDefault);
    const startItemNo = calculatePagingStart(pageSize, pageNo);

    if (userId) {
        notificationsGateway.getNotificationsForUser(startItemNo, pageSize, userId)
            .then((notifications: NotificationModel[] | void) => {
                response.send(
                    new JsonResponse(notifications)
                );
            });
    }
});

/**
 * Add a new category to the DB for Quizzes
 *
 * @param {string} notifications              An array of notification IDs that need to be marked as acknowledged
 */
notificationsRouter.post('/AcknowledgeNotifications', (request: Request, response: Response) => {
    const notifications = request.body.notifications;

    if (notifications && notifications.length) {
        // TODO: IMPLEMENT (Maybe Web Sockets or SignalR for push notifications
    }
});
