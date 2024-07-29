import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../shared/pokemon.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPokemonPipe } from '../shared/search-pokemon.pipe';
import { IPokemons } from '../shared/entities';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [NgIf, FormsModule, SearchPokemonPipe, CommonModule, NgFor],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  constructor(private http: HttpClient, private pokemonService: PokemonService) {}

  pokemonName = '';
  pokemonData: any;
  searchText: string = '';  // Varaible pour la recherche par nom de la formation
  pokemons:IPokemons [] = [];

  onSubmit(form: any) {
    if (form.valid) {
      this.searchPokemon();
    }
  }

  searchPokemon() {
    this.pokemonService.fetchAll()
      .subscribe(
      (data) => {
        this.pokemonData = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données du Pokémon', error);
        this.pokemonData = null;
      }
    );
  }

}
