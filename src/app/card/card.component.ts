import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { IPokemons } from '../shared/entities';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemons: IPokemons[] = [];
  pokeball: any[] = [];
  pokedex: number[] = [];
  pokemonCounts: number[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.fetchAll().subscribe((data: IPokemons[]) => {
      this.pokemons = data.slice(1, 21);
      this.pokemonCounts = Array(data.length).fill(0); // Initialise le tableau des compteurs à 0
    });
  }

  addPokemonPokedex(pokemonId: number) {
    const selectedPokemon = this.getPokemonById(pokemonId);
    if (selectedPokemon) {
      this.pokeball.push(selectedPokemon);
    }
  }

  getPokemonById(id: number) {
    return this.pokemons.find(pokemon => pokemon.pokedex_id === id);
  }
}