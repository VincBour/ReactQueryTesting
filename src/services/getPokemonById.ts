import axios from "axios"

interface PokemonType {
    slot: number;
    type: {
        name: string;
        url:  string;
    }
}

interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

interface GetPokemonByIdResult {
    base_experience: number;
    height: number;
    name: string;
    weight: number;
    stats: PokemonStat[];
    types: PokemonType[];
}

export const getPokemonById = async (id: string) => {
    return await axios.get<GetPokemonByIdResult>(`https://pokeapi.co/api/v2/pokemon/${id}`)
}