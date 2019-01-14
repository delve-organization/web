export interface UserPage {
  content: UserDto[];
  totalElements: number;
}

export interface UserDto {
    id: number;
    name: string;
    username: string;
    email: string;
    roles: string[];
}

export interface AvailableRole {
  name: string;
  icon: string;
  tooltip: string;
}
