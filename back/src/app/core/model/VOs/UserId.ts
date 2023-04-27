import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import { version as uuidVersion } from 'uuid';
import { InvalidUserId } from '../Exceptions/InvalidUserId';

export class UserId {

    private _value: string;

    constructor(value: string) {
        this.ensureIsValid(value);
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }

    public static generate(): UserId {
        return new UserId(uuidv4());
    }

    public isEqual(id: UserId): boolean {
        return this.value === id.value;
    }

    private ensureIsValid(value: string): void {
        try {
            if (!uuidValidate(value) && uuidVersion(value) !== 4) {
                throw Error;
            }
        } catch (error) {
            throw new InvalidUserId(value);
        }
    }

}
