import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aliveOrDead',
  standalone: true,
})
export class AliveOrDeadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'Alive':
        return 'Vivo';
        case 'Dead':
          return 'Muerto';
      default:
        return 'Desconocido';
    }
  }

}
