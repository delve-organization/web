import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeCardComponent} from './tree-card/tree-card.component';
import {TreeCardDeleteDialogComponent} from './dialog/tree-card-delete-dialog/tree-card-delete-dialog.component';
import {MaterialModule} from '../../common/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {TreeCardCreateDialogComponent} from './dialog/tree-card-create-dialog/tree-card-create-dialog.component';
import {TreeCardEditDialogComponent} from './dialog/tree-card-edit-dialog/tree-card-edit-dialog.component';
import {TreeCardCreateOrEditComponent} from './dialog/tree-card-create-or-edit/tree-card-create-or-edit.component';
import {DelveCommonModule} from '../../common/delve-common.module';
import {TreeCreateDialogComponent} from './dialog/tree-create-dialog/tree-create-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ColorPickerModule,
        DelveCommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        TreeCardComponent,
        TreeCardDeleteDialogComponent,
        TreeCardCreateDialogComponent,
        TreeCardEditDialogComponent,
        TreeCardCreateOrEditComponent,
        TreeCreateDialogComponent
    ],
    exports: [
        TreeCardComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent,
        TreeCardCreateDialogComponent,
        TreeCardEditDialogComponent,
        TreeCreateDialogComponent
    ]
})
export class TreeCardModule {
}
