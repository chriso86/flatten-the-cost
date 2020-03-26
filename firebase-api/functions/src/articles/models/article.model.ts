import {IAuditable} from "../../global/interfaces/auditable.interface";

export class ArticleModel implements IAuditable{
    _id: string;
    name: string;
    description: string;
    createdBy: string;
    createdOn: Date;
    updatedBy: string;
    updatedOn: Date;

    constructor(
        id: string,
        name: string,
        description: string,
        createdBy: string = 'System',
        createdOn: Date = new Date(),
        updatedBy: string = 'System',
        updatedOn: Date = new Date(),
    ) {
        this._id = id;
        this.name = name;
        this.description = description;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.updatedBy = updatedBy;
        this.updatedOn = updatedOn;
    }

    modifyCreated(createdBy?: string): void {
        this.createdBy = createdBy || 'System';
        this.createdOn = new Date();
    }

    modifyUpdated(updatedBy?: string): void {
        this.updatedBy = updatedBy || 'System';
        this.updatedOn = new Date();
    }
}
