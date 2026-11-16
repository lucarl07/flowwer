import { AuthInput } from "./AuthInput";

interface PasswordInputProps {
    name: string;
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    showLabel?: boolean;
    autoComplete?: string;
}

export function PasswordInput({
    name,
    label,
    value,
    placeholder,
    onChange,
    error,
    required = false,
    showLabel = false,
    autoComplete,
}: PasswordInputProps) {
return (
    <AuthInput
    name={name}
    label={label}
    type="password"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    error={error}
    required={required}
    showLabel={showLabel}
    autoComplete={autoComplete}
    />
);
}
