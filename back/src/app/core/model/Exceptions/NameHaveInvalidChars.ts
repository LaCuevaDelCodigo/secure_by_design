import { Name } from '../VOs/Name';
import { BaseException } from './BaseException';

export class NameHaveInvalidChars extends BaseException {

    constructor(name: string) {
        super(
            'Name have invalid characters',
            {
                name,
                invalidChars: Name.InvalidChars,
            },
        );
        Object.setPrototypeOf(this, NameHaveInvalidChars.prototype); // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    }

}
