export interface TreeDto {
    id: number;
    rootNodeId: number;
    title: string;
    editable: boolean;
    accessibility: Accessibility;
}

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

export interface CreateTreeRequestData {
    title: string;
    public: boolean;
}

export enum Accessibility {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
