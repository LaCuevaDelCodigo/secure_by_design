import { FC, useState } from "react";
import { TextInput } from '@mantine/core';
import { NameHaveInvalidChars } from "../Core/Exceptions/NameHaveInvalidChars";
import { NameMustHaveMinimumLength } from "../Core/Exceptions/NameMustHaveMinimumLength";
import { Name } from '../Core/VOs/Name'

function validateName(name?: string, required?: boolean) {
    if (required && !name) {
        return 'Campo obligatorio';
    }

    if (!required && !name) {
        return null;
    }

    try {
        new Name(name || '');
    } catch (err) {
        if (err instanceof NameHaveInvalidChars) {
            return 'Hay caracteres inválidos';
        }

        if (err instanceof NameMustHaveMinimumLength) {
            return `Debe tener mínimo ${Name.minimumLength} caracteres`;
        }
    }

    return null;
}

export const InputName: FC<{
    label: string,
    placeholder: string,
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}> = ({
    label,
    placeholder,
    value,
    onChange,
    required = false
}) => {
        const [nameError, setNameError] = useState<string | null>(null);

        const onLocalChange = (newValue: string) => {
            onChange(newValue);
            updateErrorState(newValue);
        };

        const updateErrorState = (value: string) => {
            const error = validateName(value, required)
            setNameError(error);
        }

        return (
            <TextInput
                onBlur={() => updateErrorState(value)}
                required={required}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={(value) => onLocalChange(value.currentTarget.value)}
                error={nameError}
            />
        );
    };
