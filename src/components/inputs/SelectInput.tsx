import { useEffect, useRef, useState } from "react";

type Option = {
    value: string,
    label: string
}

type SelectInputProps = {
    id: string;
    label?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    type?: string;
};

export function SelectInput({
    id,
    label = "",
    placeholder,
    value,
    onChange,
    options,
}: SelectInputProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const ref = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsOpen(true);
    }

    useEffect(()=> {
        const handleClickOutsize = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutsize);
        return () => document.removeEventListener("mousedown", handleClickOutsize);
    }, [])

    return (
        <div className="select-input" ref={ref}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                onChange={(e) => handleChange(e)}
                onFocus={() => setIsOpen(true)}
                placeholder={placeholder}
                type="text"
                value={inputValue}
            />
                {
                    isOpen && (
                        <ul className="select-options">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <li 
                                        key={option.value}
                                        onClick={() => {
                                            onChange(option.label);
                                            setInputValue(option.label);
                                            setIsOpen(false);
                                        }}    
                                        className="select-option"
                                    >
                                        {option.label}
                                    </li>
                                ))
                            ): (
                                <li className="select-no-option">Nenhuma opção encontrada</li>
                            )}
                        </ul>
                    )
                }
        </div>
        
    );
}