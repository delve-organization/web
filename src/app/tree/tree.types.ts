export interface TreeDto {
    id: number;
    rootNodeId: number;
    title: string;
    editable: boolean;
    accessibility: Accessibility;
}

export enum Accessibility {
    PUBLIC,
    PRIVATE
}
