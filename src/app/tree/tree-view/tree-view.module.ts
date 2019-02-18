import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../common/material/material.module';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {TreeService} from '../tree.service';
import {PiIframeModule} from '@ping/pi-iframe';
import {TreeViewRoutingModule} from './tree-view-routing.module';
import {DelveCommonModule} from '../../common/delve-common.module';
import {NodeService} from "./node.service";
import {PiLeaderLineModule} from "@ping/pi-leader-line";

@NgModule({
    imports: [
        CommonModule,
        TreeViewRoutingModule,
        DelveCommonModule,
        MaterialModule,
        PiLeaderLineModule,
        PiIframeModule
    ],
    declarations: [TreeViewComponent],
    providers: [NodeService, TreeService]
})
export class TreeViewModule {
}
