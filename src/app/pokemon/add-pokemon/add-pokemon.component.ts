import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemons";

@Component({
  selector: "app-add-pokemon",
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [],
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
