import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashZeroFormat',
})
export class HashZeroFormatPipe implements PipeTransform {
  transform(value: number, length: number = 3): string {
    return `#${(value ?? 0).toString().padStart(length, '0')}`;
  }
}

// Adiciona um zero à esquerda do valor e Retorna o valor formatado
