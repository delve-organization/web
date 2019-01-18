export interface TreeBoardDto {
    id: number;
    treeId: number;
    title: string;
    description: string;
    editable: boolean;
    imageUrl: string;
    color: string;
    deleted: boolean;
}

export interface DeleteTreeCardDialogData {
    id: number;
    title: string;
}
