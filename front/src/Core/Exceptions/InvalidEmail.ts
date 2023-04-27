import { BaseException } from './BaseException';

export class InvalidEmail extends BaseException {

    constructor(value: string) {
        super(
            `Invalid email "${value}"`,
            {
                email: value,
            },
        );
        Object.setPrototypeOf(this, InvalidEmail.prototype); // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    }

}
