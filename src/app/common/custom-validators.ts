import {AbstractControl, ValidatorFn, Validators} from '@angular/forms';

export class CustomValidators extends Validators {

    static size(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: {min: number, max: number} } | null => {
            if (!control.value) {
                return null;
            }
            if (control.value.toString().length < min || control.value.toString().length > max) {
                return {'size': {min, max}};
            }
            return null;
        };
    }
}
