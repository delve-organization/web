import {TranslateService} from '@ngx-translate/core';
import {FormControl} from '@angular/forms';
import {Injectable} from '@angular/core';

export type ValidationMessageFn = (FormControl) => string;

@Injectable({providedIn: 'root'})
export class ValidationMessageService {

    constructor(private translate: TranslateService) {
    }

    public errorMessage(formControl: FormControl): string {
        if (formControl.hasError('size')) {
            const error = formControl.errors['size'];
            return this.translate.instant('validation.constraints.size', {
                '0': error.max,
                '1': error.min
            });
        }
        if (formControl.hasError('required')) {
            return this.translate.instant('validation.constraints.notblank');
        }
        if (formControl.hasError('email')) {
            return this.translate.instant('validation.constraints.email');
        }

        return 'Invalid';
    }
}
