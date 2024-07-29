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
export class ListPokemonComponent implements OnInit{
  private pokemonService = inject(PokemonService);
  pokemons: IPokemons[]=[];

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
    this.pokemonService.fetchAll().subscribe(data => {
      this.pokemons = data.slice(1, 4);
    })
  }
}
