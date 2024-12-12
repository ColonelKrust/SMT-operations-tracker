import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavigationPage from "./components/NavigationPage.jsx";
import NewRunForm from "./components/NewRunForm.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavigationPage />} />
                <Route path='newRunForm' element={<NewRunForm />} />
            </Routes>
        </BrowserRouter>
    )
}