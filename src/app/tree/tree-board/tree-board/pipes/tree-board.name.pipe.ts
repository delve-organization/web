import {Pipe, PipeTransform} from '@angular/core';
import {TreeBoardDto} from '../../tree-board.types';

@Pipe({
  name: 'name'
})
export class TreeBoardNamePipe implements PipeTransform {

  transform(items: TreeBoardDto[], filter: string): TreeBoardDto[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
