import { Injectable } from '@angular/core';
import { IPokemons } from './entities';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeballService {
  private pokeball: number[] = [];

  url = environment.apiURL

  constructor(private http : HttpClient) {}

  addPokemonPokeball(id: number): void {
    this.pokeball.push(id);
  }

  getPokeball(): number[] {
    return this.pokeball;
  }

  fetchOneById(id: any) {
    return this.http.get<IPokemons>(`${this.url}/${id}`);
  }
}
