import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home";

const ConfirmarPresenca = () => {
    const [jogadores, setJogadores] = useState([]);
    const [presenca, setPresenca] = useState([]);
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const loadJogadores = async () => {
            try {
                const response = await axios.get("api/players", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setJogadores(response.data);
            } catch (err) {
                setMensagem(
                    "Erro ao carregar jogadores. Verifique o console para mais detalhes."
                );
                console.error(err);
            }
        };

        loadJogadores();
    }, []);

    const handleConfirmarPresenca = async () => {
        try {
            const token = localStorage.getItem("authToken");
            await axios.post(
                "/api/players/confirmar-presenca",
                { presenca },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMensagem("Presença confirmada com sucesso!");
        } catch (err) {
            setMensagem(
                "Erro ao confirmar presença. Verifique o console para mais detalhes."
            );
            console.error(err);
        }
    };

    const handleChange = (jogadorId) => {
        setPresenca((prevPresenca) =>
            prevPresenca.includes(jogadorId)
                ? prevPresenca.filter((id) => id !== jogadorId)
                : [...prevPresenca, jogadorId]
        );
    };

    return (
        <>
            <Home />
            <div>
                <h1>Confirmar Presença</h1>
                {
                    <form onSubmit={(e) => e.preventDefault()}>
                        {jogadores.map((jogador) => (
                            <div key={jogador.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={presenca.includes(jogador.id)}
                                        onChange={() =>
                                            handleChange(jogador.id)
                                        }
                                    />{" "}
                                    {jogador.name}
                                </label>
                            </div>
                        ))}
                        <button type="button" onClick={handleConfirmarPresenca}>
                            Confirmar Presença
                        </button>
                    </form>
                }
                {mensagem && <p>{mensagem}</p>}
            </div>
        </>
    );
};

export default ConfirmarPresenca;
