import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, mapTo, Observable, Subject, switchMap } from "rxjs";
import { PokemonService } from "src/app/pokemon.service";
import { Pokemon } from "../pokemons";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
})
export class SearchPokemonComponent implements OnInit {
  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemon(term))
    );
  }

  pokemons$: Observable<Pokemon[]>;
  searchTerms = new Subject<string>();

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemons", pokemon.id];
    this.router.navigate(link);
  }
}
