import Sidebar from "./sidebar";
import Header from "./header";
import React from "react";
import { Outlet } from "react-router-dom"; // Importa Outlet
import "../../assets/css/componets/layout/layout.css";
import PageTitle from "../pageTitle/pageTitle.tsx";

const Layout = () => {
    return (
        <div className="layout-container">
            <Sidebar />
            <div className="content-container">
                <Header />
                <div className="content">
                    <PageTitle title="Buttons list" />
                    <main className="content">
                        <Outlet /> {/* Muestra la vista activa */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
