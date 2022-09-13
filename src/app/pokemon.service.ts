import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "./pokemon/pokemons";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemon").pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    return this.http.put("api/pokemon", pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(res: Pokemon[] | Pokemon | undefined | Object) {
    console.table(res);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
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
