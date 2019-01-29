import {Component, Inject} from '@angular/core';
import {ApiError} from '../../types/error.types';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: 'delve-apierror',
    templateUrl: './api-error.component.html',
    styleUrls: ['./api-error.component.scss']
})
export class ApiErrorComponent {

    constructor(@Inject(MAT_SNACK_BAR_DATA) public apiError: ApiError) {
    }
}
