import { Component, inject, OnInit } from '@angular/core';
import { IPokemons } from '../shared/entities';
import { PokemonService } from '../shared/pokemon.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnInit{
  pokemons: IPokemons[] = [];
  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.fetchAllBlogs().subscribe((data: IPokemons[]) => {
      this.pokemons = data.slice(0, 20);
    });
  }
}
