import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;

/*
base_url: https://api.themoviedb.org/3
path: /movie/550?api_key=dc1b01a5b3525390c2780277c63f1983
params: &language=pt-BR

*/