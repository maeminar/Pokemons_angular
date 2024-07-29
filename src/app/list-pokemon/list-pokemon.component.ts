import { Component, inject, OnInit } from '@angular/core';
import { IPokemons } from '../shared/entities';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent{
pokemons: IPokemons[] = [];
service = inject(PokemonService);
searchText: string = ''; // Varaible pour la recherche par nom de la formation

ngOnInit(): void {
  this.searchPokemon;
}

searchPokemon() {
  this.service.fetchAll().subscribe((data) => {
    this.pokemons = data
      .slice(1, 20)
      .map((pokemon) => ({ ...pokemon, isVisible: true }));
  });
}
}