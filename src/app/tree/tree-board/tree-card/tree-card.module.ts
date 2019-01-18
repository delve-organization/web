import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeCardComponent} from './tree-card/tree-card.component';
import {TreeCardNormalComponent} from './tree-card-normal/tree-card-normal.component';
import {TreeCardCreateComponent} from './tree-card-create/tree-card-create.component';
import {TreeCardDeleteDialogComponent} from './tree-card-delete-dialog/tree-card-delete-dialog.component';
import {MaterialModule} from '../../../common/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        TreeCardComponent,
        TreeCardNormalComponent,
        TreeCardCreateComponent,
        TreeCardDeleteDialogComponent
    ],
    exports: [
        TreeCardNormalComponent,
        TreeCardCreateComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent
    ]
})
export class TreeCardModule {
}
