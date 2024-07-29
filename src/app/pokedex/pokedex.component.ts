import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../shared/pokemon.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IPokemons } from '../shared/entities';
import { SearchPipe } from '../shared/search-pokemon.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule, NgFor, SearchPipe, RouterLink],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  searchText: string = '';
  pokemons: IPokemons[]=[];

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
    this.pokemonService.fetchAll().subscribe((data: IPokemons[]) => {
      this.pokemons = data.slice(1 , 21);
    })
  }
}
