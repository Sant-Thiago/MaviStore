import { Ban, Search } from "lucide-react";
import { useEffect, useState } from "react"
import "./Dashboard.css";

export function Dashboard() {
    
    const [valueSearch, setValueSearch] = useState("");
    const [result, setResult] = useState<JSX.Element | null>(null);
    
    useEffect(() => {
        if (!valueSearch) {
            setResult(null);
            return;
        }

        const timeout = setTimeout(() => {
            // Lógica de busca aqui — simulação de "nenhum resultado"
            setResult(<Ban size={300} />);
        }, 1000); // espera 1 segundo após parar de digitar

        return () => clearTimeout(timeout); // limpa timeout anterior
    }, [valueSearch]);

    const handleChange = (value: string) => {
        setValueSearch(value);
    };

    return (
        <>
        
        <h1 className="dashboad-title">Dashboard</h1>

        <p>Visualização da performance de sua loja</p>
        
        <InputField 
            value = {valueSearch}
            onChange = {(value) => handleChange(value)}
        />

        {result}

        </>

    )
}

type InputFieldProps = {
    value: string
    onChange: (value: string) => void;
}

function InputField({ value, onChange }: InputFieldProps) {
    return (
        <div className="dashboard-input">
            <Search size={21} color="#777"/>
            <input 
                type="text" 
                placeholder="Pesquise" 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}