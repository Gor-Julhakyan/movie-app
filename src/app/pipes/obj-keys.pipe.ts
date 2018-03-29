import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objKeys'
})
export class ObjKeysPipe implements PipeTransform {

  // Pipe for *ngFor, which repeating Object by Key, Value like Array
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }

}
