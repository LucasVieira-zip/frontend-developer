import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { PokemonType, Response } from '../interfaces/pokeapi-types.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeService {
  private http = inject(HttpClient); // Injeta o HttpClient
  private baseUrl = signal<string>( // Define o sinal baseUrl
    'https://pokeapi.co/api/v2/type'
  ).asReadonly(); // Torna o sinal somente leitura
  private cachedPokemonTypes = signal<PokemonType[]>([]); // Define o sinal cachedPokemonTypes

  constructor() {
    this.loadPokemonTypesWithDetails(); // Carrega os tipos de Pokémon com detalhes
  }

  loadPokemonTypes(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl()); // Retorna a resposta da requisição
  }

  loadPokemonTypesWithDetails(): void {
    // Carrega os tipos de Pokémon com detalhes
    this.loadPokemonTypes() // Carrega os tipos de Pokémon
      .pipe(
        // Encadeia operadores
        switchMap(
          (
            response // Mapeia a resposta
          ) =>
            forkJoin(
              // Realiza requisições paralelas
              response.results.map((t) => this.http.get<PokemonType>(t.url)) // Mapeia os tipos de Pokémon
            )
        )
      )
      .subscribe((types) => this.cachedPokemonTypes.set(types)); // Define os tipos de Pokémon no sinal
  }

  get PokemonTypes(): PokemonType[] {
    return this.cachedPokemonTypes(); // Retorna os tipos de Pokémon
  }

  getType(name: string): PokemonType | undefined {
    return this.cachedPokemonTypes().find((t) => t.name === name); // Retorna o tipo de Pokémon
  }

  getTypeIcon(name: string): string {
    const type = this.getType(name); // Obtém o tipo de Pokémon
    return (
      type?.sprites['generation-vi']['omega-ruby-alpha-sapphire'].name_icon ?? // Retorna o ícone do tipo de Pokémon
      ''
    );
  }
}
