import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPokemon',
  standalone: true
})
export class SearchPokemonPipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any[] {

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it[fieldName].toLowerCase().includes(searchText);
    });
  }

}
