import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TreeDto} from '../../tree-board/types/tree.types';
import {TreeService} from '../../tree-board/services/tree.service';
import {NodeDto, UserNodeRelationDto} from '../types/node.types';
import {NodeService} from '../services/node.service';

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
