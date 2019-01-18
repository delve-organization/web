import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree/tree.component';
import {NodeService} from './tree-node/node.service';
import {DelveComponentsModule} from '../../common/delve-components/delve-components.module';
import {MaterialModule} from '../../common/material/material.module';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {TreeService} from '../tree.service';
import {PiTreeChartModule} from '@ping/pi-tree-chart';
import {PiLeaderLineModule} from '@ping/pi-leader-line';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import {TreeViewRoutingModule} from './tree-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TreeViewRoutingModule,
    DelveComponentsModule,
    MaterialModule,
    PiLeaderLineModule,
    PiTreeChartModule
  ],
  declarations: [TreeComponent, TreeViewComponent, TreeNodeComponent],
  providers: [NodeService, TreeService]
})
export class TreeViewModule {
}
