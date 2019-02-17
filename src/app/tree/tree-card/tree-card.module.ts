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
import { NodeSelectDialogComponent } from './dialog/node-select-dialog/node-select-dialog.component';
import {TreeViewModule} from "../tree-view/tree-view.module";
import {PiTreeChartModule} from "@ping/pi-tree-chart";
import {PiIframeModule} from "@ping/pi-iframe";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ColorPickerModule,
        DelveCommonModule,
        ReactiveFormsModule,
        TreeViewModule,
        PiIframeModule
    ],
    declarations: [
        TreeCardComponent,
        TreeCardDeleteDialogComponent,
        TreeCardCreateDialogComponent,
        TreeCardEditDialogComponent,
        TreeCardCreateOrEditComponent,
        TreeCreateDialogComponent,
        NodeSelectDialogComponent
    ],
    exports: [
        TreeCardComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent,
        TreeCardCreateDialogComponent,
        TreeCardEditDialogComponent,
        TreeCreateDialogComponent,
        NodeSelectDialogComponent
    ]
})
export class TreeCardModule {
}
