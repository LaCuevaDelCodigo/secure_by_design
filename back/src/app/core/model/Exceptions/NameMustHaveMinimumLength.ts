import { Name } from '../VOs/Name';
import { BaseException } from './BaseException';

export class NameMustHaveMinimumLength extends BaseException {

    constructor(value: string) {
        super(
            `The name "${value}" must have at least ${Name.minimumLength} characters`,
            {
                name: value,
                minimumLength: Name.minimumLength,
            },
        );
        Object.setPrototypeOf(this, NameMustHaveMinimumLength.prototype); // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    }

}
