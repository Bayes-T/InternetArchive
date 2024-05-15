import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      const noAuthor = value.substring(value.indexOf(".") + 2)
      const noBrackets = noAuthor.substring(0, noAuthor.indexOf("["))
      return noBrackets
    } else {
      return ""
    }

  }

}
