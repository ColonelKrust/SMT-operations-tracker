import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavigationPage from "./components/NavigationPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavigationPage />} />
            </Routes>
        </BrowserRouter>
    )
}