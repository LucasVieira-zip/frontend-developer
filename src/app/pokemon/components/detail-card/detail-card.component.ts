import { HashZeroFormatPipe } from './../../pipes/hash-zero-format.pipe';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { Pokemon } from '../../interfaces/pokeapi-pokemon.interfaces';
import { CommonModule } from '@angular/common';
import { PokemonTypeService } from '../../services/pokemon-type.service';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { ConvertUnitPipe } from '../../pipes/convert-unit.pipe';
import { PokemonSpeciesService } from '../../services/pokemon-species.service';
import { CleanTextPipe } from '../../pipes/clean-text.pipe';
import { PokemonSpecies } from '../../interfaces/pokeapi-species.interfaces';

@Component({
  selector: 'pokemon-detail-card',
  imports: [CommonModule, HashZeroFormatPipe, ConvertUnitPipe, CleanTextPipe],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss',
})
export class DetailCardComponent implements OnInit {
  private route = inject(ActivatedRoute); // Injeta o serviço ActivatedRoute
  private pokemonService = inject(PokemonService);
  private pokemonTypeService = inject(PokemonTypeService);
  private PokemonSpeciesService = inject(PokemonSpeciesService);
  private pokemonCryElementRef = viewChild<ElementRef>('pokemonCry');

  id = signal<string>(''); // Sinal para armazenar o id do pokémon
  pokemon = signal<Pokemon | null>(null); // Sinal para armazenar o pokémon
  pokemonTypeIcons = signal<string[]>([]);
  pokemonDescription = signal<string>('');
  pokemonGenera = signal<string>('');

  ngOnInit(): void {
    // Carrega o pokémon quando o componente é inicializado
    this.route.paramMap.subscribe((p) => {
      // Obtém o id do pokémon da rota
      const id = p.get('id')!; // Obtém o id do pokémon
      this.id.set(id); // Armazena o id do pokémon
      this.loadPokemon(); // Carrega o pokémon
    });
  }

  loadPokemon(): void {
    this.pokemonService.loadPokemonDetail(this.id()!).subscribe((r) => {
      // Carrega os detalhes do pokémon
      this.pokemon.set(r); // Armazena o pokémon
      this.loadTypeIcons(); // Carrega os ícones dos tipos de pokémon
      this.loadSpecies(); // Carrega as informações da espécie do pokémon
    });
  }

  loadTypeIcons(): void {
    const pokemonTypeIcons = this.pokemon() // Carrega os ícones dos tipos de pokémon
      ? this.pokemon()!.types.map(
          (
            t // Mapeia os tipos do pokémon
          ) => this.pokemonTypeService.getTypeIcon(t.type.name) // Obtém o ícone do tipo
        )
      : [];
    this.pokemonTypeIcons.set(pokemonTypeIcons); // Armazena os ícones dos tipos de pokémon
  }

  loadSpecies(): void {
    this.PokemonSpeciesService.loadPokemonSpecies(this.id()).subscribe((s) => {
      // Carrega as informações da espécie do pokémon
      this.setPokemonDescription(s); // Define a descrição do pokémon
    });
  }

  private setPokemonDescription(species: PokemonSpecies): void {
    const heartgoldEntry = species.flavor_text_entries.find(
      // Encontra a descrição do pokémon
      (e) => e.version.name === 'heartgold'
    );
    heartgoldEntry
      ? this.pokemonDescription.set(heartgoldEntry.flavor_text) // Armazena a descrição do pokémon
      : null; // Define a descrição do pokémon como nula caso não encontre
  }

  get officialArtworkUrl() {
    return this.pokemon()?.sprites.other?.['official-artwork']?.front_default; // Obtém a URL da imagem oficial do pokémon
  }
}
