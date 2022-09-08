import { Pokemon } from "./Pokemon";

export interface User {
    username: string,
    favorites?: Pokemon[]
}