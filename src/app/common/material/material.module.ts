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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonToggleModule, MatSortModule, MatPaginatorModule, MatTableModule,
        MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule,
        MatGridListModule, MatInputModule, MatTooltipModule, MatDialogModule,
        MatSlideToggleModule, MatSelectModule
    ],
    exports: [
        MatButtonToggleModule, MatSortModule, MatPaginatorModule, MatTableModule,
        MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule,
        MatGridListModule, MatInputModule, MatTooltipModule, MatDialogModule,
        MatSlideToggleModule, MatSelectModule
    ]
})
export class MaterialModule {
}
