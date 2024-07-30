import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy{
  count: number = 0;
  idInterval: any;

ngOnInit(): void {
  this.idInterval = setInterval(() => this.count++, 1000)
}
ngOnDestroy(): void {
  clearInterval(this.idInterval)
}
}
