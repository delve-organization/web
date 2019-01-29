import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {SnackbarService} from '../material/snackbar.service';
import {UNPROCESSABLE_ENTITY} from 'http-status-codes';
import {ApiErrorComponent} from '../error/apierror/api-error.component';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

    constructor(private injector: Injector) {
    }

    handleError(error: any): void {
        const snackBarService: SnackbarService = this.injector.get(SnackbarService);

        if (error.status === UNPROCESSABLE_ENTITY) {
            error.error.errors.forEach(err => {
                const args: {[key: number]: string} = {};
                err.arguments.forEach((arg, index) => {
                    args[index] = arg;
                });
                err.arguments = args;
            });

            snackBarService.showFromComponent(ApiErrorComponent, error.error);
        } else {
            snackBarService.show(error.message);
        }
    }
}
