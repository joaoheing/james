import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from 'src/app/service/bebida/bebida.service';

@Pipe({
  name: 'tipoBebida'
})
export class TipoBebidaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return (Tipo as any)[value] || '';
  }

}