import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ComponentType} from '@angular/cdk/portal';

@Injectable({providedIn: 'root'})
export class SnackbarService {

    constructor(private ngZone: NgZone, private snackBar: MatSnackBar) {
    }

    public show(message: string): void {
        this.ngZone.run(() => this.snackBar.open(message, null, {
            duration: 5000
        }));
    }

    public showFromComponent(component: ComponentType<any>, data: any): void {
        this.ngZone.run(() => this.snackBar.openFromComponent(component, {
            duration: 5000, data
        }));
    }
}
