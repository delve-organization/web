export interface ApiError {
    status: number;
    errors: FieldErrorMessage[];
}

export interface FieldErrorMessage {
    field: string;
    resourceKey: string;
    arguments: any;
}
