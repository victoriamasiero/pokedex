import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, } from 'rxjs';
import { PokemonDTO } from '../../models/PokemonDTO';
import { PokemonFullDTO } from '../../models/PokemonFullDTO';
import { SpeciesDTO } from '../../models/SpeciesDTO';
import { Pokemon } from '../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  private api_url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  async getAllPokemon(): Promise<Pokemon[]> {
    const response = await firstValueFrom(this.http.get<PokemonDTO>(this.api_url + "?limit=51"));
    return response.results;
  }

  // should create object with full_data info
  async getPokemonProfileByName(name: string): Promise<any> {
    const response = await firstValueFrom(this.http.get<PokemonFullDTO>(this.api_url + "/" + name));

    let pokemon_data = {
      id: response.order,
      name: response.name,
      height: response.height,
      weight: response.weight,
      types: response.types,
      abilities: response.abilities,
      moves: response.moves,
      sprites: response.sprites
    }

    const species_url = response.species.url;

    const species_res = await firstValueFrom(this.http.get<SpeciesDTO>(species_url));

    let species_data = {
      base_happiness: species_res.base_happiness,
      capture_rate: species_res.capture_rate,
      color: species_res.color.name,
      habitat: species_res.habitat,
      flavor_text: species_res.flavor_text_entries[4],
      evolves_from_species: species_res.evolves_from_species,
      evolution_chain:species_res.evolution_chain
    }

    let full_data = Object.assign(pokemon_data, species_data);    
    return full_data;
  }

  async getPokemonCardByName(name: string): Promise<Pokemon> {
    const response = await firstValueFrom(this.http.get<PokemonFullDTO>(this.api_url + "/" + name));
    let pokemon: Pokemon = response;
    pokemon.sprite = response.sprites.front_shiny;
    return pokemon;
  }

}
