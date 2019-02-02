import {Component, OnInit} from '@angular/core';
import {ValidationMessageFn, ValidationMessageService} from '../common/services/validation-message.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../common/custom-validators';
import {EditUserRequest} from './settings.types';
import {UserService} from '../common/services/user.service';
import {TokenStorageService} from '../auth/services/token-storage.service';
import {UserDto} from '../admin/admin.types';
import {Router} from '@angular/router';

@Component({
    selector: 'delve-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    userLoaded = false;
    getErrorMessage: ValidationMessageFn;
    form: FormGroup;
    nameField: FormControl;

    private userId: number;

    constructor(private token: TokenStorageService, private userService: UserService,
                private router: Router, private validationMessageService: ValidationMessageService) {
    }

    ngOnInit() {
        this.userService.getUser(this.token.getUserId()).subscribe((user: UserDto) => {
            this.userId = user.id;
            this.nameField = new FormControl(user.name, [Validators.required, CustomValidators.size(3, 50)]);
            this.form = new FormGroup({
                'name': this.nameField
            });

            this.userLoaded = true;
        });

        this.getErrorMessage = this.validationMessageService.errorMessage.bind(this.validationMessageService);
    }

    onSubmit() {
        const request: EditUserRequest = {
            name: this.nameField.value
        };

        this.userService.editUser(request).subscribe((user: UserDto) => {
            this.router.navigateByUrl('/tree-board');
        });
    }
}
