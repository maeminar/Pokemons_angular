import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../shared/pokemon.service';
import { IPokemons } from '../shared/entities';
import { PokeballService } from '../shared/pokeball.service'; 
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [RouterLink, CommonModule, NgFor],
  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.css'
})

export class PokeballComponent implements OnInit {
  imgUrl: string = "";

   showPokeball(pokeballName: string) {
    this.imgUrl = "https://www.giantbomb.com/a/uploads/scale_small/9/95666/1879714-pokeball.png";
   }

   pokemons: IPokemons[] = [];
   private pokeballService = inject(PokeballService);

   pokemonsInPokeball: IPokemons[] = [];
   ngOnInit(): void {
    this.pokemonsInPokeball = this.pokeballService.getPokemons(); // Récupérez les Pokémon depuis le service
  }
  }
