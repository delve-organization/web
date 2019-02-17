import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../common/material/material.module';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {TreeService} from '../tree.service';
import {PiTreeChartModule} from '@ping/pi-tree-chart';
import {PiLeaderLineModule} from '@ping/pi-leader-line';
import {PiIframeModule} from '@ping/pi-iframe';
import {TreeViewRoutingModule} from './tree-view-routing.module';
import {DelveCommonModule} from '../../common/delve-common.module';
import {NodeService} from "./node.service";

@NgModule({
    imports: [
        CommonModule,
        TreeViewRoutingModule,
        DelveCommonModule,
        MaterialModule,
        PiLeaderLineModule,
        PiTreeChartModule,
        PiIframeModule
    ],
    declarations: [TreeViewComponent],
    providers: [NodeService, TreeService]
})
export class TreeViewModule {
}
