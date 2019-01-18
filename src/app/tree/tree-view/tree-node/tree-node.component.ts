import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Node} from '../tree/node';
import {NodeService} from './node.service';
import {PiTreeChartNodeComponent} from '@ping/pi-tree-chart';
import {UserNodeRelationDto} from './tree-node.types';

@Component({
  selector: 'delve-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit, AfterViewInit {

  @Input() public node: Node;
  @Input() public component: PiTreeChartNodeComponent;
  @Input() public relation: UserNodeRelationDto;

  public showChildren: boolean;

  constructor(private nodeService: NodeService) {
  }

  ngOnInit() {
    this.showChildren = this.node.parent === undefined;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.node.setNodeComponent(this.component);
      this.node.updateComponent();
    });
  }

  public toggleVisitedStatus(): void {
    this.nodeService.setRelation(this.node.id, !this.node.visited).subscribe(() => {
      this.node.setVisited(!this.node.visited);
      this.node.updateComponent(true);
    });
  }

  public toggleChildren(): void {
    this.showChildren = !this.showChildren;
    if (this.showChildren === true) {
      this.component.showChildren();
    } else {
      this.component.hideChildren();
    }
  }

  public imageLoaded(): void {
    this.component.rePositionChildConnectors(true);
  }
}
