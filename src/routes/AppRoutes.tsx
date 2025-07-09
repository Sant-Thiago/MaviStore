import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AddNewProduct } from "../pages/product/AddNewProduct";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { MainLayout } from "../layout/MainLayout";
import { Ban } from "lucide-react";
import { Sales } from "../pages/sales/Sales";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="/produtos" element={<AddNewProduct />}/>
                    <Route path="/vendas" element={<Sales />}/>
                    <Route path="/clientes" element={<Ban size={300} />}/>
                    <Route path="/mais" element={<Ban size={300} />}/>
                    <Route path="/configuracoes" element={<Ban size={300} />}/>
                    

                </Route>
            </Routes>
        </Router>
    )
}