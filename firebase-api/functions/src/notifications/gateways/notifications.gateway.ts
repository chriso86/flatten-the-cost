import {NotificationModel} from "../models/notification.model";
import {
    DocumentReference,
    QueryDocumentSnapshot,
    QuerySnapshot,
    WriteResult
} from "@google-cloud/firestore";
import {BaseGateway} from "../../global/gateways/base.gateway";
import {parseJsonModel} from "../../global/helpers/json-parser";

export class NotificationsGateway extends BaseGateway {
    constructor() {
        super();

        this._collection = this._db.collection('notifications');
    }

    // READ
    getNotificationsForUser(startItemNo: number = 1, pageSize: number = 10, userId: string): Promise<NotificationModel[]> {
        return this._collection
            .where('userId', '==', userId)
            .orderBy('createdDate', 'desc')
            .startAt(startItemNo)
            .limit(pageSize)
            .get()
            .then((notifications: QuerySnapshot) => {
                // Load all articles from DB
                return notifications.docs.map((doc: QueryDocumentSnapshot) => {
                    const notification = doc.data();

                    return new NotificationModel(
                        notification._id,
                        notification.notificationType,
                        notification.description,
                        notification.createdBy,
                        notification.createdOn
                    );
                });
            });
    }

    // WRITE
    createNotification(documentReference: DocumentReference, notification: NotificationModel): Promise<WriteResult> {
        if (!documentReference) {
            throw new Error('You can only add a notification to an existing document reference');
        }

        if (!notification) {
            throw new Error('There was no \'notification\' object passed in to add to the database');
        }

        const jsonifiedNotification = parseJsonModel(notification);

        return documentReference
            .set(jsonifiedNotification);
    }
}
