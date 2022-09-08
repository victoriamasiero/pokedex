import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonAPIService } from './services/pokemon/pokemon-api.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonAPIService
  ],
  exports: [
    
  ]
  
})
export class SharedModule { }
