import {Pipe, PipeTransform} from '@angular/core';
import {TreeCardDto} from './tree-card.types';

@Pipe({
  name: 'name'
})
export class TreeCardNamePipe implements PipeTransform {

  transform(items: TreeCardDto[], filter: string): TreeCardDto[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
