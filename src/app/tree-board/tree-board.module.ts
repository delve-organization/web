import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeBoardComponent} from './tree-board/tree-board.component';
import {DelveComponentsModule} from '../common/delve-components/delve-components.module';
import {TreeBoardRoutingModule} from './routing/tree-board-routing.module';
import {TreeCardComponent} from './tree-card/tree-card.component';
import {TreeService} from './services/tree.service';
import {MaterialModule} from '../common/material/material.module';
import {FormsModule} from '@angular/forms';
import {TreeBoardService} from './services/tree-board.service';
import {TreeBoardNamePipe} from './tree-board/pipes/tree-board.name.pipe';
import {TreeBoardNotDeletedPipe} from './tree-board/pipes/tree-board.not-deleted.pipe';
import {TreeCardDeleteDialogComponent} from './tree-card/tree-card-delete-dialog/tree-card-delete-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        DelveComponentsModule,
        TreeBoardRoutingModule,
        FormsModule
    ],
    declarations: [
        TreeBoardComponent,
        TreeCardComponent,
        TreeBoardNamePipe,
        TreeBoardNotDeletedPipe,
        TreeCardDeleteDialogComponent
    ],
    entryComponents: [
        TreeCardDeleteDialogComponent
    ],
    providers: [
        TreeService,
        TreeBoardService
    ]
})
export class TreeBoardModule {
}
