import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import "./MainLayout.css";

export function MainLayout() {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}