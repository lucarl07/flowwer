interface AuthInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    value: string;
    error?: string;
    required?: boolean;
    showLabel?: boolean;
    autoComplete?: string;
    onChange: (value: string) => void;
}

export function AuthInput({
    label,
    name,
    type = "text",
    placeholder,
    value,
    error,
    required = false,
    showLabel = false,
    autoComplete,
    onChange,
}: AuthInputProps) {
return (
    <div className="flex w-full flex-col gap-1.5">
    <label
        htmlFor={name}
        className={
        showLabel
            ? "px-4 font-buenard text-sm font-medium text-darkgreen"
            : "sr-only"
        }
    >
        {label}
    </label>

    <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ?? label}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
            w-full rounded-2xl bg-beige px-6 py-5 font-buenard text-lg tracking-wide text-darkgreen placeholder:text-darkgreen/50
            border-2 outline-none transition
            ${
                error
                ? "border-red-400 focus:border-red-500"
                : "border-transparent focus:border-pink"
            }
            focus:ring-4 focus:ring-pink/30
        `}
    />

    {error && (
        <span
        id={`${name}-error`}
        role="alert"
        className="px-4 font-buenard text-sm text-red-500"
        >
        {error}
        </span>
    )}
    </div>
);
}
