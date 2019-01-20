import {TreeDto} from '../../tree.types';
import {TreeBoardDto} from '../tree-board.types';

export interface DeleteTreeCardDialogData {
    id: number;
    title: string;
}

export interface TreeCardDialogData {
    title: string;
    description: string;
    public: boolean;
    image: string;
    color: string;
    trees: TreeDto[];
    treeId: number;
}

export interface CreateTreeCardDialogData extends TreeCardDialogData {
    treeBoards: TreeBoardDto[];
    treeBoardIndex: number;
}

export interface EditTreeCardDialogData extends TreeCardDialogData {
    treeBoards: TreeBoardDto[];
    treeBoardIndex: number;
    treeBoardId: number;
}
