import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AddNewProduct } from "../pages/Product/AddNewProduct";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { MainLayout } from "../layout/MainLayout";
import { Ban } from "lucide-react";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="produtos" element={<AddNewProduct />}/>
                    <Route path="vendas" element={<Ban size={300} />}/>
                    <Route path="clientes" element={<Ban size={300} />}/>
                    <Route path="mais" element={<Ban size={300} />}/>
                    <Route path="configuracoes" element={<Ban size={300} />}/>
                    

                </Route>
            </Routes>
        </Router>
    )
}