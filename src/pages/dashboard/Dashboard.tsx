import { Ban, Search } from "lucide-react";
import { useEffect, useState } from "react"
import "./Dashboard.css";
import { SelectInput } from "../../components/inputs";

export function Dashboard() {
    
    const [valueSearch, setValueSearch] = useState("");
    const [result, setResult] = useState<JSX.Element | null>(null);
    const [totalSales, setTotalSales] = useState(0);
    const [totalSalesPercent, setTotalSalesPercent] = useState("%");
    const [profit, setProfit] = useState(0);
    const [profitPercent, setProfitPercent] = useState("%");
    const [expenses, setExpenses] = useState(0);
    const [expensesPercent, setExpensesPercent] = useState("%");
    const [stockSummary, setStockSummary] = useState(0);
    const [stockSummaryPercent, setStockSummaryPercent] = useState("%");
    const [dateRange, setDateRange] = useState("")
    const [dateRangeKpi, setDateRangeKpi] = useState("Últimos 30 Dias")
    const [salesTrend, setSalesTrend] = useState(0);
    const [salesTrendPercent, setSalesTrendPercent] = useState("%");
    const [productPerformance, setProductPerformance] = useState(0)
    const [productPerformancePercent, setProductPerformancePercent] = useState("%");


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
        
        <h1 className="dashboard-title">Dashboard</h1>

        <p className="dashboard-about">Visualização da performance de sua loja</p>
        
        <InputField 
            value = {valueSearch}
            onChange = {(value) => handleChange(value)}
        />

        <ul className="dashboard-kpi">
            <div className="kpi">
                <p className="title">Total de Vendas</p>
                <h2 className="value">{totalSales}</h2>
                <span className="percent">{totalSalesPercent}</span>
            </div>

            <div className="kpi">
                <p className="title">Ganhos</p>
                <h2 className="value">{profit}</h2>
                <span className="percent">{profitPercent}</span>
            </div>

            <div className="kpi">
                <p className="title">Gastos</p>
                <h2 className="value">{expenses}</h2>
                <span className="percent">{expensesPercent}</span>
            </div>

            <div className="kpi">
                <p className="title">Resumo do estoque</p>
                <h2 className="value">{stockSummary}</h2>
                <span className="percent">{stockSummaryPercent}</span>
            </div>

        </ul>
        
        <h2 className="dashboard-reports-title">Reports</h2>

        <SelectInput
            id="dateRangeInput"
            value={dateRange}
            placeholder="Selecione o Intervalo de Data"
            onChange={(value) => setDateRange(value)}
            options={[
                { value: "ultimos7dias", label: "Últimos 7 Dias" },
                { value: "ultimos30dias", label: "Últimos 30 Dias" },
                { value: "ultimos3meses", label: "Últimos 3 Meses" },
            ]}
        />

        <div className="dashboard-reports-kpi">
            <div className="kpi">
                <p>Tendência de Vendas</p>
                <h2>{salesTrend}</h2>
                <span>{dateRangeKpi} {salesTrendPercent}</span>
                <span className="chart">Grafico</span>
            </div>

            <div className="kpi">
                <p>Performance de Produto</p>
                <h2>{productPerformance}</h2>
                <span>{dateRangeKpi} {productPerformancePercent}</span>
                <span className="chart">Grafico</span>
            </div>

        </div>

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