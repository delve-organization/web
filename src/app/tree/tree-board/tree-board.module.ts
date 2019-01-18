import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeBoardComponent} from './tree-board/tree-board.component';
import {DelveComponentsModule} from '../../common/delve-components/delve-components.module';
import {TreeBoardRoutingModule} from './tree-board-routing.module';
import {TreeService} from '../tree.service';
import {MaterialModule} from '../../common/material/material.module';
import {FormsModule} from '@angular/forms';
import {TreeBoardService} from './tree-board/tree-board.service';
import {TreeBoardNamePipe} from './tree-board/pipes/tree-board.name.pipe';
import {TreeBoardNotDeletedPipe} from './tree-board/pipes/tree-board.not-deleted.pipe';
import {TreeCardModule} from './tree-card/tree-card.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        DelveComponentsModule,
        TreeBoardRoutingModule,
        TreeCardModule,
        FormsModule
    ],
    declarations: [
        TreeBoardComponent,
        TreeBoardNamePipe,
        TreeBoardNotDeletedPipe
    ],
    providers: [
        TreeService,
        TreeBoardService
    ]
})
export class TreeBoardModule {
}
