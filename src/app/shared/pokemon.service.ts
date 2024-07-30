import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemons } from './entities';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokedex: number[] = [];

 url = environment.apiURL

  constructor(private http: HttpClient) { }

  fetchOneById(id: any) {
    return this.http.get<IPokemons>(`${this.url}/${id}`);
  }
  
  fetchAll(){
    return this.http.get<IPokemons[]>(`${this.url}`);
  }

  addPokemonPokedex(id: number): void {
    this.pokedex.push(id);
  }
}
