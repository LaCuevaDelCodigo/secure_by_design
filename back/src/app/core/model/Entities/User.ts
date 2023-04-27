import { Email } from '../VOs/Email';
import { Name } from '../VOs/Name';
import { UserId } from '../VOs/UserId';

export class User {

    private _id: UserId;
    private _email: Email;
    private _name: Name;

    constructor(
        id: UserId,
        email: Email,
        name: Name,
    ) {
        this._id = id;
        this._email = email;
        this._name = name;
    }

    get id(): UserId {
        return this._id;
    }

    get email(): Email {
        return this._email;
    }

    get name(): Name {
        return this._name;
    }

}
