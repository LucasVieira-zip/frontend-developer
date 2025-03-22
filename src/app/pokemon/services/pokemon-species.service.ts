import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonSpecies } from '../interfaces/pokeapi-species.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpeciesService {
  private http = inject(HttpClient); // Injeta o HttpClient
  private baseUrl = signal<string>( // Define a URL base da API
    'https://pokeapi.co/api/v2/pokemon-species'
  ).asReadonly(); // Torna a URL base somente leitura

  constructor() {}

  loadPokemonSpecies(id: string | number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${this.baseUrl()}/${id}`); // Retorna um Observable com os detalhes do Pokémon
  }
}
