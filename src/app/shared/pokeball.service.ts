import { Injectable } from '@angular/core';
import { IPokemons } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PokeballService {

  private pokemonsInPokeball: IPokemons[] = [];

  // Ajoute un Pokémon à la liste
  addPokemon(pokemon: IPokemons): void {
    if (!this.pokemonsInPokeball.find(p => p.pokedex_id === pokemon.pokedex_id)) {
      this.pokemonsInPokeball.push(pokemon);
    }
  }

    // Retourne tous les Pokémon ajoutés
    getPokemons(): IPokemons[] {
      return this.pokemonsInPokeball;
    }
}
