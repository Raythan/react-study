import { useEffect, useState } from "react";
import React from "react";
import api from "../../services/api";

function Home(){
    const [filmes, setFilmes] = useState([]);

useEffect(() => {
    async function loadFilmes(){
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "dc1b01a5b3525390c2780277c63f1983",
                language: "pt-BR",
                page: 1
            }
        })

        console.log(response);
    }

    loadFilmes();
}, []);

    return (
        <div>
            <h1>Bem-vindo a home</h1>
        </div>
    )
}

export default Home;