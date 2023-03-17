import { Pipe, PipeTransform } from '@angular/core';
import { formlist } from './form';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(forms:formlist[],rating:number): formlist[] {
    return forms.filter((form)=>form.rating<=rating)  ;
  }

}
