import { Pipe, PipeTransform } from '@angular/core';
import { Periodo } from 'src/app/service/reserva/reserva.service';

@Pipe({
  name: 'periodo'
})
export class PeriodoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return (Periodo as any)[value] || '';
  }
}
