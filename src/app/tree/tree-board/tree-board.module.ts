import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeBoardComponent} from './tree-board/tree-board.component';
import {TreeBoardRoutingModule} from './tree-board-routing.module';
import {TreeService} from '../tree.service';
import {MaterialModule} from '../../common/material/material.module';
import {FormsModule} from '@angular/forms';
import {TreeCardModule} from '../tree-card/tree-card.module';
import {TreeCardService} from '../tree-card/tree-card.service';
import {TreeCardNamePipe} from '../tree-card/tree-card.name.pipe';
import {DelveCommonModule} from '../../common/delve-common.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        DelveCommonModule,
        TreeBoardRoutingModule,
        TreeCardModule,
        FormsModule
    ],
    declarations: [
        TreeBoardComponent,
        TreeCardNamePipe
    ],
    providers: [
        TreeService,
        TreeCardService
    ]
})
export class TreeBoardModule {
}
