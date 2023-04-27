import { BaseException } from './BaseException';

export class InvalidUserId extends BaseException {

    constructor(value: string) {
        super(
            `Invalid user id "${value}"`,
            {
                userId: value,
            },
        );
        Object.setPrototypeOf(this, InvalidUserId.prototype); // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    }

}
