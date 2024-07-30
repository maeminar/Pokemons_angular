import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../shared/pokemon.service';
import { IPokemons } from '../shared/entities';
import { CommonModule, NgFor } from '@angular/common';
import { PokeballService } from '../shared/pokeball.service';

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

   constructor(private pokeballService: PokeballService) {}
 
   ngOnInit(): void {
     const pokeball = this.pokeballService.getPokeball();
 
     for (let i = 0; i < pokeball.length; i++) {
      console.log(`Fetching Pokémon with ID: ${pokeball[i]}`);
       this.pokeballService.fetchOneById(pokeball[i]).subscribe(pokemon => {
         this.pokemons.push(pokemon); // Ajoute le Pokémon récupéré à la liste
         console.log(this.pokemons); // Affiche la liste des Pokémon dans la console
       });
     }
   }
  }
