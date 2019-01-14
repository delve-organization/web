export interface NodeDto {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  children: Array<NodeDto>;
}

export interface UserNodeRelationDto {
  nodeId: number;
  visited: boolean;
}
