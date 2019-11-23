import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    console.log(value, args);
    value = value.filter((item, index, list): boolean => {
      if (String(item).match(args)) {
        return true;
      }
      return false;
    });
    return value;
  }

}
