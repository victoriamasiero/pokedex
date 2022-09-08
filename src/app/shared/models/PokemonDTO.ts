import { Pokemon } from "./Pokemon";

export interface PokemonDTO {
    count: number,
    next: string,
    previous: string,
    results: Pokemon[]
}