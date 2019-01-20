import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeCardComponent} from './tree-card/tree-card.component';
import {TreeCardNormalComponent} from './tree-card-normal/tree-card-normal.component';
import {TreeCardCreateComponent} from './tree-card-create/tree-card-create.component';
import {TreeCardDeleteDialogComponent} from './tree-card-delete-dialog/tree-card-delete-dialog.component';
import {MaterialModule} from '../../../common/material/material.module';
import {TreeCardCreateOrEditDialogComponent} from './tree-card-create-or-edit-dialog/tree-card-create-or-edit-dialog.component';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ColorPickerModule
    ],
    declarations: [
        TreeCardComponent,
        TreeCardNormalComponent,
        TreeCardCreateComponent,
        TreeCardDeleteDialogComponent,
        TreeCardCreateOrEditDialogComponent
    ],
    exports: [
        TreeCardNormalComponent,
        TreeCardCreateComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent,
        TreeCardCreateOrEditDialogComponent
    ]
})
export class TreeCardModule {
}
