import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonService } from "src/app/pokemon.service";
import { Pokemon } from "../pokemons";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemonDetails(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
