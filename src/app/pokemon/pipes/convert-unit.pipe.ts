import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUnit'
})
export class ConvertUnitPipe implements PipeTransform {
  transform(value: number, divisor: number, suffix: string): string {
    return (value !== null && value !== undefined)
      ? `${(value / divisor).toFixed(2)} ${suffix}`
      : `0 ${suffix}`;
  }
}

