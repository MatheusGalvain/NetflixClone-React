const API_KEY = 'b1e108c55a82f49619193af036e7d04d';
const API_BASE = 'https://api.themoviedb.org/3';

// - Originais 
// - Recomendados
// - Em alta
// - Ação
// - Comedia
// - Terror 
// - Ficcao
// - Documentarios

// Requisita o json e retorna resultado
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return [
            {
                slug:'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'Mystery',
                title: 'Mistério',
                items: await basicFetch(`/discover/movie?with_genres=9648&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'fantasy',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
    
}