import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ListPokemonComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
