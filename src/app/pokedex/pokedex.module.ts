import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';


@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonSearchComponent,
    PokedexComponent,
    PokemonProfileComponent
  ],
  imports: [
    SharedModule,
    PokedexRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class PokedexModule { }
