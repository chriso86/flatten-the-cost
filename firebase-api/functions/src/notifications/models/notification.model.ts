import {IAuditable} from "../../global/interfaces/auditable.interface";
import {NotificationTypeEnum} from "../enums/notification-type.enum";

export class NotificationModel implements IAuditable{
    _id: string;
    description: string;
    userId: string;
    notificationType: NotificationTypeEnum;
    notificationAcknowledged: boolean;
    createdBy: string;
    createdOn: Date;

    constructor(
        id: string,
        description: string,
        userId: string,
        notificationType: NotificationTypeEnum,
        notificationAcknowledged: boolean = false,
        createdBy: string = 'System',
        createdOn: Date = new Date()
    ) {
        this._id = id;
        this.description = description;
        this.userId = userId;
        this.notificationType = notificationType;
        this.notificationAcknowledged = notificationAcknowledged;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
    }

    modifyCreated(createdBy?: string): void {
        this.createdBy = createdBy || 'System';
        this.createdOn = new Date();
    }

    acknowledgeNotification() {
        this.notificationAcknowledged = true;
    }
}
