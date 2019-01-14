import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AuthLoginInfo} from '../types/login-info.types';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'delve-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: any = {};
  public isLoggedIn = false;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private token: TokenStorageService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.token.exists()) {
      this.isLoggedIn = true;
    }
  }

  public onSubmit(): void {
    this.loginInfo = new AuthLoginInfo(this.form.username, this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUsername(data.username);
        this.token.saveAuthorities(data.authorities);

        this.isLoggedIn = true;
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.snackBar.open(error.error.message);
      }
    );
  }

  private reloadPage(): void {
    window.location.reload();
  }
}
