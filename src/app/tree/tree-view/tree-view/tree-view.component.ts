import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TreeService} from '../../tree.service';
import {NodeService} from '../tree-node/node.service';
import {NodeDto, UserNodeRelationDto} from '../tree-node/tree-node.types';
import {TreeDto} from '../../tree.types';

@Component({
  selector: 'delve-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  public tree: TreeDto;
  public node: NodeDto;
  public relations: UserNodeRelationDto[];

  public treeLoaded: boolean;
  public nodeLoaded: boolean;
  public relationsLoaded: boolean;

  constructor(private route: ActivatedRoute, private treeService: TreeService, private nodeService: NodeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const treeId: number = +params['id'];
      this.treeService.getTreeById(treeId).subscribe(treeData => {
        this.tree = treeData;
        this.treeLoaded = true;

        this.nodeService.getNodesFromRoot(this.tree.rootNodeId).subscribe(nodeData => {
          this.node = nodeData;
          this.nodeLoaded = true;
        });
        this.nodeService.getRelationsByUser().subscribe(relationsData => {
          this.relations = relationsData;
          this.relationsLoaded = true;
        });
      });
    });
  }
}
