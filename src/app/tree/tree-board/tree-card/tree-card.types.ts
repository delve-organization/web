import {TreeDto} from '../../tree.types';
import {TreeBoardDto} from '../tree-board.types';

export interface DeleteTreeCardDialogData {
    id: number;
    title: string;
}

export interface TreeCardDialogData {
    trees: TreeDto[];
    treeBoards: TreeBoardDto[];
    treeBoard: TreeBoardDto;
    treeBoardIndex: number;
    public: boolean;
}
