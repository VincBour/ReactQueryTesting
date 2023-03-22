import { useQuery } from "react-query"
import { getPokemon } from "../services/getPokemon"

export const useGetPokemon = (offset: number) => {
    return useQuery(["Pokemon", offset], () => getPokemon(offset), { keepPreviousData: true, staleTime: 10000 })
}