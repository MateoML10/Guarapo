import { Pipe, PipeTransform,} from '@angular/core';


@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {

  // metodo para filtrar la busqueda de los pokemon
  // la propiedad-> me trae cualquier objeto que llame y esté en el array
  transform(array: any[], text: string, propiedad: string): any[] {

    if (text === '') {
      return array;
    }else{
      text = text.toLowerCase();
      return array.filter(item => {
        return item[propiedad].toLowerCase().includes(text)
      })
    }
  }



}
