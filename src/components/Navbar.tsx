import { Home, BarChart, Package, Users, Settings } from "lucide-react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export function Navbar() {

    return (
        <nav className="navbar">
            <h2 className="navbar-title">Gerenciamento de loja</h2>
            <ul className="navbar-menu">
                <NavItem
                    to="/"
                    icon={<Home size={21} />} 
                    label="Dashboard"
                />

                <NavItem
                    to="/vendas"
                    icon={<BarChart size={21} />}
                    label="Vendas"
                />

                
                <NavItem 
                    to="/produtos"
                    icon={<Package size={21} />} 
                    label="Produtos"
                />
                
                <NavItem 
                    to="clientes"
                    icon={<Users size={21} />} 
                    label="Clientes"
                />
                
                <NavItem 
                    to="mais"
                    icon={<span>...</span>} 
                    label="Mais"
                />

            </ul>

            <div className="navbar-settings">
                <NavItem 
                    to="configuracoes"
                    icon={<Settings size={21}/>} 
                    label="Configurações"
                />
            </div>

        </nav>
    )
}

type NavItemProps = {
    to: string;
    icon: React.ReactNode;
    label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
    return (
        <NavLink 
            to={to}
            className={ ({ isActive }) =>
                `navbar-item ${isActive ? "active": ""}`
            }   
        >

            {icon}
            <span>{label}</span>
        </NavLink>
    )
}