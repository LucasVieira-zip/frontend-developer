import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanText',
})
export class CleanTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\f/g, ' ').replace(/\n/g, ' ');

  }
}
