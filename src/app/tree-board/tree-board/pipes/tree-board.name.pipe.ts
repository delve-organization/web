import {Pipe, PipeTransform} from '@angular/core';
import {TreeBoardDto} from '../../types/tree.types';

@Pipe({
  name: 'name'
})
export class TreeBoardNamePipe implements PipeTransform {

  transform(items: TreeBoardDto[], filter: string): TreeBoardDto[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.title.indexOf(filter) !== -1);
  }
}
