import {Pipe, PipeTransform} from '@angular/core';
import {TreeBoardDto} from '../../tree-board.types';

@Pipe({
  name: 'notDeleted',
  pure: false
})
export class TreeBoardNotDeletedPipe implements PipeTransform {

  transform(items: TreeBoardDto[]): TreeBoardDto[] {
    if (!items) {
      return items;
    }

    return items.filter(item => !item.deleted);
  }
}
