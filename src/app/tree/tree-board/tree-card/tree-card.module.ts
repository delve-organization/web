import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeCardComponent} from './tree-card/tree-card.component';
import {TreeCardNormalComponent} from './tree-card-normal/tree-card-normal.component';
import {TreeCardCreateComponent} from './tree-card-create/tree-card-create.component';
import {TreeCardDeleteDialogComponent} from './tree-card-delete-dialog/tree-card-delete-dialog.component';
import {MaterialModule} from '../../../common/material/material.module';
import {TreeCardCreateDialogComponent} from './tree-card-create-dialog/tree-card-create-dialog.component';
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
        TreeCardCreateDialogComponent
    ],
    exports: [
        TreeCardNormalComponent,
        TreeCardCreateComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent,
        TreeCardCreateDialogComponent
    ]
})
export class TreeCardModule {
}
