import { Pipe, PipeTransform } from '@angular/core';
import { OrdemRefeicao } from 'src/app/service/comida/comida.service';

@Pipe({
  name: 'ordemRefeicao'
})
export class OrdemRefeicaoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return (OrdemRefeicao as any)[value] || '';
  }

}
