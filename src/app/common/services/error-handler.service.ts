import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {SnackbarService} from "../material/snackbar.service";

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

    constructor(private injector: Injector) {
    }

    handleError(error: any): void {
        const snackBarService: SnackbarService = this.injector.get(SnackbarService);

        snackBarService.show(error.message);
    }
}
