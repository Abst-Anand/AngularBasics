import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classify'
})
export class ClassifyPipe implements PipeTransform {

  transform(value :string ): string  {

    const val = parseInt(value)

    if(val < 1000)
      return "Class A:" + value

    return "Class B:" + value;
  }

}
