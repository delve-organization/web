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
