export interface TreeDto {
    id: number;
    rootNodeId: number;
    title: string;
    editable: boolean;
    accessibility: Accessibility;
}

export interface CreateTreeRequestData {
    title: string;
    public: boolean;
}

export enum Accessibility {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
