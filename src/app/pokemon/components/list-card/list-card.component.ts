import { CommonModule } from '@angular/common';
import { Component, input, OnInit, signal, inject } from '@angular/core';
import { Type } from '../../interfaces/pokeapi-pokemon.interfaces';
import { PokemonTypeService } from '../../services/pokemon-type.service';
import { Router } from '@angular/router';
import { HashZeroFormatPipe } from '../../pipes/hash-zero-format.pipe';

@Component({
  selector: 'pokemon-list-card',
  imports: [CommonModule, HashZeroFormatPipe],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss',
})
export class ListCardComponent implements OnInit {
  private router = inject(Router); // Injeta o serviço Router
  private pokemonTypeService = inject(PokemonTypeService); // Injeta o serviço PokemonTypeService
  imgUrl = input<string | undefined>('');
  name = input.required<string>();
  number = input.required<number>();
  types = input.required<Type[]>();
  typeIcons = signal<string[]>([]);

  ngOnInit(): void {
    this.loadTypeIcons(); // Carrega type icons quando o componente é inicializado
  }

  loadTypeIcons(): void {
    // Carrega os ícones dos tipos de pokémon
    const typeIcons = this.types().map((t) =>
      this.pokemonTypeService.getTypeIcon(t.type.name)
    );
    this.typeIcons.set(typeIcons);
  }

  onClick(): void {
    this.router.navigate([`/pokemon/${this.number()}`]);
  }
}
