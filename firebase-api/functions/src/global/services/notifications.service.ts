import {NotificationModel} from "../../notifications/models/notification.model";
import {NotificationsGateway} from "../../notifications/gateways/notifications.gateway";
import {NotificationTypeEnum} from "../../notifications/enums/notification-type.enum";

export class NotificationsService {
	private notificationsGateway: NotificationsGateway = new NotificationsGateway();

	createNotification(
		userId: string,
		notificationType: NotificationTypeEnum,
		description: string
	) {
		const newDocumentSpace = this.notificationsGateway.getNewDocumentReference();
		const mappedCategory = new NotificationModel(
			newDocumentSpace.id,
			description,
			userId,
			notificationType
		);

		if (newDocumentSpace && mappedCategory) {
			this.notificationsGateway.createNotification(newDocumentSpace, mappedCategory);
		}
	}
}
