import { Component, inject, OnInit } from '@angular/core';
import { IPokemons } from '../shared/entities';
import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  pokemons: IPokemons[] = [];
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  pokemonCounts: number[] = []; // Tableau pour les compteurs des Pokémon

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.fetchAll().subscribe((data: IPokemons[]) => {
      this.pokemons = data.slice(1, 21);
      this.pokemonCounts = Array(data.length).fill(0); // Initialise le tableau des compteurs à 0
    });
  }

  addPokemon(index: number): void {
    this.pokemonCounts[index]++;
  }
}
