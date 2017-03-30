import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortlength'
})
export class ShortlengthPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length > 9) {
      return value.substring(0, 9) + "...";
    }
    return value;
  }

}
