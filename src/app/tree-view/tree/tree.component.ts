import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NodeDto, UserNodeRelationDto} from '../types/node.types';
import {Node} from './node';
import {PiLeaderLineOptions, PiLeaderLinePath, PiLeaderLineSocket} from '@ping/pi-leader-line';
import {PiTreeChartComponent} from '@ping/pi-tree-chart';

@Component({
  selector: 'delve-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() public nodeData: NodeDto;
  @Input() public relationsData: UserNodeRelationDto[];

  @ViewChild('tree', {read: PiTreeChartComponent})
  public tree: PiTreeChartComponent;

  public datasource: Node;
  public relationsByNodeId: { [key: number]: UserNodeRelationDto } = {};

  public readonly lineOptions: PiLeaderLineOptions = {
    startSocket: PiLeaderLineSocket.BOTTOM,
    endSocket: PiLeaderLineSocket.TOP,
    endSocketGravity: [0, -50],
    path: PiLeaderLinePath.FLUID,
    color: 'green',
    dropShadow: {
      opacity: 0.2
    }
  };

  constructor() {
  }

  ngOnInit() {
    this.datasource = this.createOrgChartDataFrom(this.nodeData);
    this.mapRelationsByNodeId();
    this.initializeRelations(this.datasource);
  }

  private createOrgChartDataFrom(nodeDto: NodeDto, parentNode?: Node): Node {
    const node: Node = new Node(nodeDto.id, nodeDto.title, nodeDto.description, nodeDto.imageUrl, parentNode, null);
    const children: Node[] = nodeDto.children.map(childNode => this.createOrgChartDataFrom(childNode, node));
    node.setChildren(children);

    return node;
  }

  private mapRelationsByNodeId(): void {
    this.relationsData.forEach(relation => {
      this.relationsByNodeId[relation.nodeId] = relation;
    });
  }

  private initializeRelations(node: Node): void {
    node.children.forEach(child => this.initializeRelations(child));
    if (this.relationsByNodeId[node.id]) {
      node.setVisited(this.relationsByNodeId[node.id].visited);
    }
  }
}
