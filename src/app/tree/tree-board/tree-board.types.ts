import {TreeDto} from '../tree.types';

export interface TreeBoardDto {
    id: number;
    treeId: number;
    title: string;
    description: string;
    editable: boolean;
    imageUrl: string;
    color: string;
}

export interface DeleteTreeCardDialogData {
    id: number;
    title: string;
}

export interface CreateTreeCardDialogData {
    trees: TreeDto[];
    title: string;
    description: string;
    public: boolean;
    image: string;
    color: string;
    treeId: number;
}
