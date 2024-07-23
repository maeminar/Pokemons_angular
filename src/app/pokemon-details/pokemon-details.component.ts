import { Component, OnInit, inject } from '@angular/core';
import { IPokemons } from '../shared/entities';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit{
ngOnInit(): void {
  this.fetchOnePokemon();
}

service= inject(PokemonService);
route= inject(ActivatedRoute);
pokemon:IPokemons |undefined;

fetchOnePokemon() {
  const id = this.route.snapshot.paramMap.get('id');
  this.service.fetchOne(id).subscribe( data => {
    this.pokemon = data;
  })
}
}
