import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const USER_ID_KEY = 'AuthUserId';

@Injectable({providedIn: 'root'})
export class TokenStorageService {

    private roles: Array<string> = [];

    constructor() {
    }

    public exists(): boolean {
        return this.getToken() !== null;
    }

    public signOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(username: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }

    public getUsername(): string {
        return sessionStorage.getItem(USERNAME_KEY);
    }

    public saveUserId(userId: number): void {
        window.sessionStorage.removeItem(USER_ID_KEY);
        window.sessionStorage.setItem(USER_ID_KEY, userId.toString());
    }

    public getUserId(): number {
        return +sessionStorage.getItem(USER_ID_KEY);
    }

    public saveAuthorities(authorities: string[]): void {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[] {
        this.roles = [];

        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }

        return this.roles;
    }
}
