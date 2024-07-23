import { Component, inject, OnInit } from '@angular/core';
import { IPokemons } from '../shared/entities';
import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemons: IPokemons[]=[]; 
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
    this.pokemonService.fetchAll().subscribe(data => {
      this.pokemons = data.slice(0, 20);
    })
  }

}
