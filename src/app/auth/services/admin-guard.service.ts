import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

const TREE_BOARD_URL = '/tree-board';
const ROLE_ADMIN = 'ROLE_ADMIN';

@Injectable()
export class AdminGuardService implements CanActivate {

    constructor(private router: Router, private token: TokenStorageService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.token.getAuthorities().includes(ROLE_ADMIN)) {
            this.router.navigate([TREE_BOARD_URL]);
            return false;
        }
        return true;
    }
}
