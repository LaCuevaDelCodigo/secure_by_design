import { FC, useState } from "react";
import { TextInput } from '@mantine/core';
import { Email } from "../Core/VOs/Email";
import { InvalidEmail } from "../Core/Exceptions/InvalidEmail";

function validateEmail(email?: string, required?: boolean) {

    if (required && !email) {
        return 'Campo obligatorio';
    }

    if (!email) {
        return 'Nombre no válido';
    }

    try {
        new Email(email);
    } catch (err) {
        if (err instanceof InvalidEmail) {
            return 'El email es inválido';
        }
    }

    return null;
}

export const InputEmail: FC<{
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}> = ({
    value,
    onChange,
    required = false,
}) => {

        const [error, setError] = useState<string | null>(null);

        const onLocalChange = (newValue: string) => {
            onChange(newValue);

            if (!newValue) {
                return
            }

            updateErrorState(newValue);
        };

        const updateErrorState = (value: string) => {
            const error = validateEmail(value, required)
            setError(error);
        }

        return (
            <TextInput
                type="email"
                required={required}
                label="Email"
                autoComplete=""
                placeholder="ej: email@example.com"
                value={value}
                onChange={(value) => onLocalChange(value.currentTarget.value)}
                error={error}
            />
        );
    };
