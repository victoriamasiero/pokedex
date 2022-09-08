import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  @Output() onReset = new EventEmitter();
  search_val: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSearchClick() {    
    this.onSearch.emit(this.search_val);
  }

  onClickReset() {
    this.search_val = "";
    this.onReset.emit();
  }

}
