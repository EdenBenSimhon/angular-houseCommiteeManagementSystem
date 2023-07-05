import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name:'shorten'
})
export class shortenPipe implements PipeTransform {
  transform(value: any, limit: number): any {
    return value.substr(0,limit);
  }

}
