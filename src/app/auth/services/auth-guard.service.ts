import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

const LOGIN_URL = '/auth/login';
const TREE_BOARD_URL = '/tree-board';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private token: TokenStorageService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (state.url === LOGIN_URL) {
            if (this.token.exists()) {
                this.router.navigate([TREE_BOARD_URL]);
                return false;
            }
        } else {
            if (!this.token.exists()) {
                this.router.navigate([LOGIN_URL]);
                return false;
            }
        }
        return true;
    }
}
