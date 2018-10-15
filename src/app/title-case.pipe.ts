import { Pipe, PipeTransform } from '@angular/core';
import { throwError } from '../../node_modules/rxjs';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {

    
    if(!value) return null
    else {
      
      let words = value.split(' ')
      for ( var i = 0; i < words.length; i++ ){
        if ( i > 0 &&  this.isPreposition(words[i]) ){
          words[i] = words[i].toLowerCase();
        }
        else {
          words[i] = this.toTitleCase(words[i])
        }
      }
      return words.join(' ')
    }
  }

  private toTitleCase(word: string) : string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }

  private isPreposition(word: string) : boolean {
    let prepositions = [ "the", "of" ];
    return prepositions.includes(word.toLowerCase())
  }
  
}
