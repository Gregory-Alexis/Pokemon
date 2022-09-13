import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { POKEMONS } from "./pokemon/mock-pokemon-list";
import { Pokemon } from "./pokemon/pokemons";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((res) => console.table(res)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
      tap((res) => console.table(res)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
