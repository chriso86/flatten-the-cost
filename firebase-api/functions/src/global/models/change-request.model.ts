import {UserModel} from "../../users/models/user.model";
import {UserTypeEnum} from "../../users/enums/user-type.enum";
import {isNullOrUndefined} from "../helpers/value-check";

export class ChangeRequestModel {
    requestedOn: Date;
    requestedBy: string;
    approvedOn: Date;
    approvedBy: string;
    approved: boolean;
    rejectedOn: Date;
    rejectedBy: string;
    rejected: boolean;

    constructor(
        requestedOn: Date = new Date(),
        requestedBy: string = '',
        approvedOn: Date = new Date(),
        approvedBy: string = '',
        approved: boolean = false,
        rejectedOn: Date = new Date(),
        rejectedBy: string = '',
        rejected: boolean = false
    ) {
        this.requestedOn = requestedOn;
        this.requestedBy = requestedBy;
        this.approvedOn = approvedOn;
        this.approvedBy = approvedBy;
        this.approved = approved;
        this.rejectedOn = rejectedOn;
        this.rejectedBy = rejectedBy;
        this.rejected = rejected;
    }

    request(user: UserModel) {
        this.requestedBy = user._id || 'NODATA';
        this.requestedOn = new Date();
    }

    approve(user: UserModel) {
        if (this.requestedBy === 'NODATA') {
            throw new Error('You cannot approve an invalid request');
        }

        if (user.type !== UserTypeEnum.Admin &&
            user.type !== UserTypeEnum.Collaborator) {
            throw new Error('You do not have the permissions to approve this request');
        }

        this.approved = true;
        this.approvedBy = user._id || 'NODATA';
        this.approvedOn = new Date();
    }

    reject(user: UserModel) {
        if (this.requestedBy === 'NODATA') {
            throw new Error('You cannot reject an invalid request');
        }

        if (user.type !== UserTypeEnum.Admin &&
            user.type !== UserTypeEnum.Collaborator) {
            throw new Error('You do not have the permissions to reject this request');
        }

        this.rejected = true;
        this.rejectedBy = user._id || 'NODATA';
        this.rejectedOn = new Date();
    }

    valid(): boolean {
        return !isNullOrUndefined(this.requestedOn) && !isNullOrUndefined(this.requestedBy);
    }
}
