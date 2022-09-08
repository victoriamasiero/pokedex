import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit {
  @Input() full_pokemon: any;
  @Input() is_fun_size: boolean = false;
  @Output() onSelectEvolution: EventEmitter<Pokemon>  = new EventEmitter();
  loading: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  onSelect(pokemon: Pokemon) {
    this.onSelectEvolution.emit(pokemon);

  }

  ngOnChanges(): void {
    /**
     * Loading functionality is used temporarily instead of creating directive
     * for img reloading
     */
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1);

  }

}
