import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorIntl,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {CustomMatPaginatorIntl} from './custom-mat-paginator-intl';

@NgModule({
    imports: [
        MatButtonToggleModule, MatSortModule, MatPaginatorModule, MatTableModule,
        MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule,
        MatGridListModule, MatInputModule, MatTooltipModule, MatDialogModule,
        MatSlideToggleModule, MatSelectModule, MatProgressBarModule,
    ],
    exports: [
        MatButtonToggleModule, MatSortModule, MatPaginatorModule, MatTableModule,
        MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule,
        MatGridListModule, MatInputModule, MatTooltipModule, MatDialogModule,
        MatSlideToggleModule, MatSelectModule, MatProgressBarModule
    ],
    providers: [
        {
            provide: MatPaginatorIntl,
            useFactory: (translate) => new CustomMatPaginatorIntl(translate),
            deps: [TranslateService]
        }
    ]
})
export class MaterialModule {
}
