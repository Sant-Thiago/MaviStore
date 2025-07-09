type TextInputProps = {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
};

export function TextInput({
    id,
    label,
    placeholder,
    value,
    onChange,
    type = "text"
}: TextInputProps) {
    return (
        <div className="text-input">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}