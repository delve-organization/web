import {Component, OnInit} from '@angular/core';
import {SignupInfoTypes} from '../types/signup-info.types';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'delve-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form: any = {};
    signupInfo: SignupInfoTypes;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.signupInfo = new SignupInfoTypes(
            this.form.name,
            this.form.username,
            this.form.email,
            this.form.password);

        this.authService.signUp(this.signupInfo).subscribe(
            () => {
                this.router.navigateByUrl('/auth/login');
            }
        );
    }
}
