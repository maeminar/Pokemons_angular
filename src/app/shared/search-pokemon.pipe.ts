import { Pipe, PipeTransform } from '@angular/core';
import { IPokemons } from './entities';

@Pipe({
  name: 'searchPokemon',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(values: IPokemons[], terms: string): IPokemons[] {
    if (!terms) {
      return values;
    }

    return values.filter((pokemon) =>
      pokemon.name.fr.toLowerCase().includes(terms.toLowerCase()),
    );
  }
}