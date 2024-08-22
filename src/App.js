import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CadastroJogadores from "./components/CadastroJogadores";
import ConfirmarPresenca from "./components/ConfirmarPresenca";
import SorteioTimes from "./components/SorteioTimes";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Cadastro de Jogadores</Link>
          </li>
          <li>
            <Link to="/confirmar-presenca">Confirmar Presença</Link>
          </li>
          <li>
            <Link to="/sorteia-jogadores">Sorteia Jogadores</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<CadastroJogadores />} />
          <Route path="/confirmar-presenca" element={<ConfirmarPresenca />} />
          <Route path="/sorteia-jogadores" element={<SorteioTimes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
