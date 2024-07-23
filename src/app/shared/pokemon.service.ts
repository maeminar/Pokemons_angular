import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemons } from './entities';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://tyradex.tech/api/v1/pokemon"

  constructor(private http: HttpClient) { }

  fetchOne(id: any) {
    return this.http.get<IPokemons>(`${this.url}/${id}`);
  }
  
  fetchAll(){
    return this.http.get<IPokemons[]>(`${this.url}`);
  }
}
