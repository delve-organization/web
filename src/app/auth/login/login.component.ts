import {Component, OnInit} from '@angular/core';
import {AuthLoginInfo} from '../types/login-info.types';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {ValidationMessageFn, ValidationMessageService} from '../../common/services/validation-message.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomValidators} from '../../common/custom-validators';

@Component({
    selector: 'delve-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public isLoggedIn = false;

    getErrorMessage: ValidationMessageFn;
    name: FormControl;
    username: FormControl;
    email: FormControl;
    password: FormControl;

    constructor(private authService: AuthService, private token: TokenStorageService,
                private validationMessageService: ValidationMessageService) {
    }

    ngOnInit() {
        this.getErrorMessage = this.validationMessageService.errorMessage.bind(this.validationMessageService);

        this.username = new FormControl(null, [Validators.required, CustomValidators.size(3, 50)]);
        this.password = new FormControl(null, [Validators.required, CustomValidators.size(6, 40)]);

        if (this.token.exists()) {
            this.isLoggedIn = true;
        }
    }

    public onSubmit(): void {
        const loginInfo = new AuthLoginInfo(this.username.value, this.password.value);

        this.authService.attemptAuth(loginInfo).subscribe(
            data => {
                this.token.saveToken(data.accessToken);
                this.token.saveUsername(data.username);
                this.token.saveAuthorities(data.authorities);
                this.token.saveUserId(data.userId);

                this.isLoggedIn = true;
                this.reloadPage();
            }
        );
    }

    private reloadPage(): void {
        window.location.reload();
    }
}
