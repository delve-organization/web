import {Component, OnInit} from '@angular/core';
import {SignupInfoTypes} from '../types/signup-info.types';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {CustomValidators} from '../../common/custom-validators';
import {ValidationMessageFn, ValidationMessageService} from '../../common/services/validation-message.service';

@Component({
    selector: 'delve-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    getErrorMessage: ValidationMessageFn;
    name: FormControl;
    username: FormControl;
    email: FormControl;
    password: FormControl;

    constructor(private authService: AuthService, private router: Router, private validationMessageService: ValidationMessageService) {
    }

    ngOnInit() {
        this.getErrorMessage = this.validationMessageService.errorMessage.bind(this.validationMessageService);

        this.name = new FormControl(null, [Validators.required, CustomValidators.size(3, 50)]);
        this.username = new FormControl(null, [Validators.required, CustomValidators.size(3, 50)]);
        this.email = new FormControl(null, [Validators.required, CustomValidators.size(5, 60), Validators.email]);
        this.password = new FormControl(null, [Validators.required, CustomValidators.size(6, 40)]);
    }

    onSubmit() {
        const signupInfo = new SignupInfoTypes(
            this.name.value,
            this.username.value,
            this.email.value,
            this.password.value
        );

        this.authService.signUp(signupInfo).subscribe(
            () => {
                this.router.navigateByUrl('/auth/login');
            }
        );
    }
}
