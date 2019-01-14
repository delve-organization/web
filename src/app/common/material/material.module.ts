import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule, MatButtonToggleModule, MatPaginatorModule, MatSortModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonToggleModule, MatSortModule, MatPaginatorModule, MatTableModule,
    MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule,
    MatGridListModule, MatInputModule, MatTooltipModule
  ],
  exports: [
    MatButtonToggleModule, MatSortModule, MatPaginatorModule, MatTableModule,
    MatSnackBarModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatIconModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule,
    MatGridListModule, MatInputModule, MatTooltipModule
  ]
})
export class MaterialModule {
}
