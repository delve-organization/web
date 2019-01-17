import { Component, OnInit } from '@angular/core';
import { CustomIconService } from '../common/services/custom-icon.service';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'delve-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;
  public isAdmin = false;

  constructor(private customIconService: CustomIconService, private token: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.customIconService.init();
    if (this.token.exists()) {
      this.isLoggedIn = true;
      if (this.token.getAuthorities().includes('ROLE_ADMIN')) {
        this.isAdmin = true;
      }
    }
  }

  public openSourceOnNewTab(): void {
    window.open('https://github.com/delve-organization', '_blank');
  }

  public logout(): void {
    this.token.signOut();
    window.location.reload();
  }

  public navigateToAdmin(): void {
    this.router.navigateByUrl('/user');
  }
}
