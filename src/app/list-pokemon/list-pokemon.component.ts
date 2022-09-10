import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemons";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemonDetails(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
