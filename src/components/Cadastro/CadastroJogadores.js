import React, { useState } from "react";
import axios from "axios";
import Home from "../Home/Home";
import "./styles.css";

const CadastroJogadores = () => {
    const [name, setNome] = useState("");
    const [level, setNivel] = useState(1);
    const [goalkeeper, setEGoleiro] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "api/players",
                {
                    name,
                    level,
                    goalkeeper,
                },
                {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                }
            );
            setMensagem("Jogador cadastrado com sucesso!");
            setNome("");
            setNivel(1);
            setEGoleiro(false);
            console.log(response);
        } catch (err) {
            setMensagem(
                "Erro ao cadastrar jogador. Verifique o console para mais detalhes."
            );
            console.error(err);
        }
    };

    return (
        <>
            <Home />
            <div>
                <h1>Cadastro de Jogadores</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:1 </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Nível:</label>
                        <input
                            type="number"
                            value={level}
                            onChange={(e) => setNivel(parseInt(e.target.value))}
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                    <div>
                        <label>É goleiro?</label>
                        <input
                            type="checkbox"
                            checked={goalkeeper}
                            onChange={(e) => setEGoleiro(e.target.checked)}
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                {mensagem && <p>{mensagem}</p>}
            </div>
        </>
    );
};

export default CadastroJogadores;
