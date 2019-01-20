import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeCardComponent} from './tree-card/tree-card.component';
import {TreeCardNormalComponent} from './tree-card-normal/tree-card-normal.component';
import {TreeCardCreateComponent} from './tree-card-create/tree-card-create.component';
import {TreeCardDeleteDialogComponent} from './dialog/tree-card-delete-dialog/tree-card-delete-dialog.component';
import {MaterialModule} from '../../../common/material/material.module';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {TreeCardCreateDialogComponent} from './dialog/tree-card-create-dialog/tree-card-create-dialog.component';
import {TreeCardEditDialogComponent} from './dialog/tree-card-edit-dialog/tree-card-edit-dialog.component';
import {TreeCardCreateOrEditComponent} from './dialog/tree-card-create-or-edit/tree-card-create-or-edit.component';

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
        TreeCardCreateDialogComponent,
        TreeCardEditDialogComponent,
        TreeCardCreateOrEditComponent
    ],
    exports: [
        TreeCardNormalComponent,
        TreeCardCreateComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent,
        TreeCardCreateDialogComponent,
        TreeCardEditDialogComponent
    ]
})
export class TreeCardModule {
}
