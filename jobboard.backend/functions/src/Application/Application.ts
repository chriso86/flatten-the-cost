import {User} from "../User/User";
import {ApprovableEntity} from "../Common/ApprovableEntity";

export class Application extends ApprovableEntity {
    applicant: User;

    constructor(
        id: string,
        applicant: User
    ) {
        super(id);

        this.applicant = applicant;
    }
}
