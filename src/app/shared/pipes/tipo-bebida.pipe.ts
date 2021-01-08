import { Pipe, PipeTransform } from '@angular/core';
import { tiposBebida } from '../model';

@Pipe({
  name: 'tipoBebida'
})
export class TipoBebidaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return tiposBebida[value] || '';
  }

}