import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastroJogadores from "./components/Cadastro/CadastroJogadores";
import ConfirmarPresenca from "./components/Confirma/ConfirmarPresenca";
import SorteioTimes from "./components/Sorteio/SorteioTimes";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" exact />
                <Route element={<Home />} path="/" exact />
                <Route element={<CadastroJogadores />} path="/cadastro" exact />
                <Route element={<ConfirmarPresenca />} path="/confirma" />
                <Route element={<SorteioTimes />} path="/sorteio" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
