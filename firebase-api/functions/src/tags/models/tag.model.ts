import {IAuditable} from "../../global/interfaces/auditable.interface";
import {ChangeRequestModel} from "../../global/models/change-request.model";

export class TagModel implements IAuditable {
    _id: string = '';
    articleId: string;
    description: string;
    createdBy: string = '';
    createdOn: Date = new Date();
    updatedBy: string = '';
    updatedOn: Date = new Date();
    changeRequests: ChangeRequestModel[] = [];

    constructor(
        id: string,
        articleId: string,
        description: string,
        createdOn: Date = new Date(),
        createdBy: string = 'System',
        updatedOn: Date = new Date(),
        updatedBy: string = ''
    ) {
        if (!description) {
            throw new Error('No tag was provided, you can\'t create a tag without a value!');
        }

        if(!articleId) {
            throw new Error('No article ID was provided for the tag');
        }

        // New TagModel
        this._id = id;
        this.articleId = articleId;
        this.description = description;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.updatedOn = updatedOn;
        this.updatedBy = updatedBy;
    }

    // TagModel methods
    issueChangeRequest(changeRequest: ChangeRequestModel): void {
        if (changeRequest.valid()) {
            this.changeRequests.push(changeRequest);
        }
    }

    // Auditable
    modifyCreated(createdBy: string) {
        this.createdBy = createdBy || 'System';
        this.createdOn = new Date();
    }

    modifyUpdated(updatedBy: string) {
        this.updatedBy = updatedBy || 'System';
        this.updatedOn = new Date();
    }
}
