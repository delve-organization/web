import {Accessibility, TreeDto} from '../tree.types';

export interface TreeBoardDto {
    id: number;
    treeId: number;
    title: string;
    description: string;
    editable: boolean;
    image: string;
    imageUrl: string;
    color: string;
    accessibility: Accessibility;
}

export interface DeleteTreeCardDialogData {
    id: number;
    title: string;
}

export interface CreateTreeCardDialogData {
    create: boolean;
    treeBoards: TreeBoardDto[];
    treeBoardIndex: number;
    treeBoardId: number;
    trees: TreeDto[];
    title: string;
    description: string;
    public: boolean;
    image: string;
    color: string;
    treeId: number;
}
