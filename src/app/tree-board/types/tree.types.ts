export interface TreeDto {
  id: number;
  rootNodeId: number;
  title: string;
  editable: boolean;
  accessibility: Accessibility;
}

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

export enum Accessibility {
  PUBLIC,
  PRIVATE
}