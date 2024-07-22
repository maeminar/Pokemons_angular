import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemons } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'https://tyradex.tech/api/v1/pokemon';
  constructor(private http: HttpClient) { }

  fetchAllBlogs() {
    return this.http.get<IPokemons[]>(this.pokemonUrl);
  }
}
