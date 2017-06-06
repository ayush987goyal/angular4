import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let tempArray = value.split('');
    tempArray = tempArray.reverse();

    return tempArray.join('');
  }

}
