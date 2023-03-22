import axios from "axios"

interface PokemonResult {
    name: string;
    url: string
}

interface GetPokemonResult {
    count: number;
    next: string;
    previous: string;
    results: PokemonResult[]
}

export const getPokemon = async (offset: number)  => {
    return await axios.get<GetPokemonResult>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
}

