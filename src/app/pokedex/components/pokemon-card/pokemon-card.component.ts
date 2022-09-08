import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() onSelectPokemon: EventEmitter<Pokemon> = new EventEmitter();
  img_url: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

  constructor() {
  }

  ngOnInit(): void {
    
    let id;

    if (this.pokemon.sprite) {
      this.img_url = this.pokemon.sprite
    } else if (this.pokemon.url) {
      const regex_search = this.pokemon.url.match(/\/([0-9])+\//g);
      if (!regex_search || !regex_search.length) {
        id = 0;
      } else {
        id = regex_search[0].replace(/\//g, "");
      }

      this.img_url = this.img_url + id + '.png';
    }

  }

  onSelect() {
    this.onSelectPokemon.emit(this.pokemon);
  }

}
