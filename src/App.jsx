import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import NavigationPage from './components/NavigationPage.jsx';
import NewRunForm from './components/NewRunForm.jsx';
import RuntimeDataPage from './components/RuntimeDataPage.jsx';
import './styles/app.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavigationPage />} />
                <Route path='newRunForm' element={<NewRunForm />} />
                <Route path='runtimeData' element={<RuntimeDataPage />} />
            </Routes>
        </BrowserRouter>
    )
}