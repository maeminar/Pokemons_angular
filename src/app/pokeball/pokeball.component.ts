import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../shared/pokemon.service';
import { IPokemons } from '../shared/entities';

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.css'
})

export class PokeballComponent implements OnInit {
  imgUrl: string = "";
  isPokeballVisible = false;

   showPokeball(pokeballName: string) {
    this.imgUrl = "https://www.giantbomb.com/a/uploads/scale_small/9/95666/1879714-pokeball.png";
   }

   showPokemon(pokemonName: string) {
    
  }

   pokemons: IPokemons[] = [];
   private pokemonService = inject(PokemonService);

   ngOnInit() {
    this.pokemonService.fetchAll().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }
}
