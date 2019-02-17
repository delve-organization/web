import {Accessibility, NodeDto, TreeDto} from '../tree.types';

export interface TreeCardDto {
    id: number;
    treeId: number;
    title: string;
    description: string;
    editable: boolean;
    image: string;
    imageUrl: string;
    color: string;
    accessibility: Accessibility;
    ownerName: string;
}

export interface DeleteTreeCardDialogData {
    id: number;
    title: string;
}

export interface TreeCardDialogData {
    trees: TreeDto[];
    treeCards: TreeCardDto[];
    treeCard: TreeCardDto;
    treeCardIndex: number;
    public: boolean;
}

export interface TreeDialogData {
    trees: TreeDto[];
}

export interface NodeSelectorDialogData {
    rootNode: NodeDto;
}
