import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ListPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
