import {Component, OnInit} from '@angular/core';
import {TreeService} from '../../tree.service';
import {TreeBoardService} from './tree-board.service';
import {TreeBoardDto} from '../tree-board.types';
import {TreeDto} from '../../tree.types';

@Component({
  selector: 'delve-tree-board',
  templateUrl: './tree-board.component.html',
  styleUrls: ['./tree-board.component.scss']
})
export class TreeBoardComponent implements OnInit {

  public treeBoards: TreeBoardDto[];
  public trees: TreeDto[];
  public treeBoardsLoaded: boolean;
  public treesLoaded: boolean;
  public treeCardFilter = '';

  constructor(private treeBoardService: TreeBoardService, private treeService: TreeService) {
  }

  ngOnInit() {
    this.treeBoardService.getAllAvailable().subscribe((response) => {
      this.treeBoards = response;
      this.treeBoardsLoaded = true;
    });
    this.treeService.getAllTrees().subscribe((response) => {
      this.trees = response;
      this.treesLoaded = true;
    });
  }
}
