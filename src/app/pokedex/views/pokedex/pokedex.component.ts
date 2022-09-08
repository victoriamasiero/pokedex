import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { PokemonAPIService } from 'src/app/shared/services/pokemon/pokemon-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon_list: Pokemon[] = [];
  favorites_list: any[] = [];
  full_pokemon: any = false;
  is_favorite: boolean = false;
  is_profile_tab: boolean = true;

  constructor(private pokemonService: PokemonAPIService) { }

  async ngOnInit(): Promise<void> {
    this.pokemon_list = await this.pokemonService.getAllPokemon();
  }

  ngOnChanges() {
  }

  async searchPokemon(pokemon_name: string): Promise<void> {
    this.pokemon_list = [await this.pokemonService.getPokemonCardByName(pokemon_name)];
  }

  async resetPokemonList(): Promise<void> {
    this.pokemon_list = await this.pokemonService.getAllPokemon();
  }

  async selectPokemon(pokemon: Pokemon): Promise<void> {
    this.full_pokemon = await this.pokemonService.getPokemonProfileByName(pokemon.name);
    this.is_favorite = (this.favorites_list.findIndex(x => x.name == this.full_pokemon.name) == -1) ? false : true;
    this.is_profile_tab = true;
  }

  toggleFromFavorites() {
    let name = this.full_pokemon.name;
    var index = this.favorites_list.findIndex(x => x.name == name);

    if (index === -1) {
      this.favorites_list.push(this.full_pokemon);
      this.is_favorite = true;
    } else {
      this.favorites_list.splice(index, 1);
      this.is_favorite = false;
    }

  }

  toggleTab(status: boolean) {
    this.is_profile_tab = status;
  }

  showPokemon(pokemon: any) {    
    this.full_pokemon = pokemon;
    this.is_profile_tab = true;
    this.is_favorite = (this.favorites_list.findIndex(x => x.name == this.full_pokemon.name) == -1) ? false : true;
  }

}
