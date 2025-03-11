import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/layout/layout.tsx";
import Evaluaciones from './views/Evaluaciones.tsx';

const rootElement = document.getElementById('app');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Layout />}>
                    <Route path="evaluaciones" element={<Evaluaciones />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
} else {
    console.error("No se encontró el elemento con id 'app'.");
}
