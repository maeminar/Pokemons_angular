import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { Error404Component } from './error404/error404.component';
import { CardComponent } from './card/card.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { PokedexComponent } from './pokedex/pokedex.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pokemon', component: CardComponent},
    {path: 'pokemon/:id', component: PokemonDetailsComponent},
    {path: "pokeball", component: PokeballComponent},
    {path: "pokedex", component: PokedexComponent},
    {path: "**", component: Error404Component} // Route pour l'erreur 404
];
