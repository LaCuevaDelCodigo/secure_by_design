import { InvalidEmail } from '../Exceptions/InvalidEmail';

export class Email {

    private _value: string;

    constructor(value: string) {
        this.ensureIsValid(value);
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }

    public isEqual(email: Email): boolean {
        return this.value === email.value;
    }

    private ensureIsValid(value: string) {
        if (!this.isValidEmail(value)) {
            throw new InvalidEmail(value);
        }
    }

    private isValidEmail(value: string): boolean {
        const haveAtSign = value.includes('@');
        const atSignIsNotLastCharacter = value.indexOf('@') < value.length - 1;

        const [userName, domain] = value.split('@');
        const haveUserNameAndDomain = !!userName && !!domain;

        let haveCorrectDomain = false;
        if (haveUserNameAndDomain) {
            const [domainName, domainType] = domain.split('.');
            haveCorrectDomain = !!domainName && !!domainType;
        }

        return haveAtSign && atSignIsNotLastCharacter && haveUserNameAndDomain && haveCorrectDomain;
    }

}
