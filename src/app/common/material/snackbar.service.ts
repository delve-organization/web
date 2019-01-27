import {Injectable, NgZone} from "@angular/core";
import {MatSnackBar} from "@angular/material";

@Injectable({providedIn: 'root'})
export class SnackbarService {

    constructor(private ngZone: NgZone, private snackBar: MatSnackBar) {
    }

    public show(message: string): void {
        this.ngZone.run(() => this.snackBar.open(message, null, {
            duration: 5000
        }));
    }
}