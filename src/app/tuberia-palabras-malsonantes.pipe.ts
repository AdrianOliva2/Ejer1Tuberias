import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tuberiaPalabrasMalsonantes'
})
export class TuberiaPalabrasMalsonantesPipe implements PipeTransform {

  transform(value: string, args: string): string {
    let palabras = args.split(',');
    if (palabras.filter(v => v == value).length > 0) {
      let cadena: string = "";
      for (let i = 0; i < value.length; i++){
        cadena += "*";
      }
      return cadena;
    } else {
      return value;
    }
  }

}
