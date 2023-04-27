import { NameHaveInvalidChars } from '../Exceptions/NameHaveInvalidChars';
import { NameMustHaveMinimumLength } from '../Exceptions/NameMustHaveMinimumLength';

export class Name {

    public static readonly InvalidChars = [
        '<',
        '>',
        '"',
        '\\',
        '/',
        '|',
        '?',
        '*',
        '[',
        ']',
        '=',
        '+',
        '-',
        '^',
        '$',
        '@',
        '!',
        '#',
        '%',
        '&',
        '{',
        '}',
        ';',
        ':',
    ];

    public static readonly minimumLength = 3;

    private _value: string;

    constructor(value: string) {
        this.ensureHaveMinimumLength(value);
        this.ensureHaveValidChars(value);
        this._value = value;
    }

    get value(): string {
        return this._value;
    }

    private ensureHaveMinimumLength(value: string) {
        if (value.length < Name.minimumLength) {
            throw new NameMustHaveMinimumLength(value);
        }
    }

    private ensureHaveValidChars(value: string) {
        const haveInvalidChars = Name.InvalidChars.some(invalidChar => value.includes(invalidChar));
        if (haveInvalidChars) {
            throw new NameHaveInvalidChars(value);
        }
    }

}
