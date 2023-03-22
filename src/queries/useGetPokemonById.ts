import { getPokemonById } from './../services/getPokemonById';
import { useQuery } from "react-query"

export const useGetPokemonById = (id?: string) => {
    return useQuery({
        queryKey: ["GetPokemonById", id],
        queryFn: () => getPokemonById(id!),
        staleTime: Infinity,
        enabled: !!id
    })
}