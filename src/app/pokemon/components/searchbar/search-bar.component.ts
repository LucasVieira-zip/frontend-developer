import { CommonModule } from '@angular/common';
import { Component, effect, output, signal } from '@angular/core';

@Component({
  selector: 'pokemon-searchbar',
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  value = output<string>(); // Saída para emitir o valor do input
  inputValue = signal<string>(''); // Sinal para armazenar o valor do input

  debounceEffect = effect((onCleanup) => {
    // evita que o evento seja detectado várias vezes
    const value = this.inputValue(); // Obtém o valor atual do input
    const timeout = setTimeout(() => {
      this.value.emit(value); // Emite o valor atual do input
    }, 500);

    onCleanup(() => {
      // Limpa o timeout quando o efeito é encerrado
      clearTimeout(timeout);
    });
  });
}
