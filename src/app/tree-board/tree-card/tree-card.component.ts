import {Component, Input, OnInit} from '@angular/core';
import {TreeBoardDto} from '../types/tree.types';
import {Router} from '@angular/router';
import {TreeBoardService} from '../services/tree-board.service';

@Component({
  selector: 'delve-tree-card',
  templateUrl: './tree-card.component.html',
  styleUrls: ['./tree-card.component.scss']
})
export class TreeCardComponent implements OnInit {

  @Input()
  public treeBoard: TreeBoardDto;

  constructor(private router: Router, private treeBoardService: TreeBoardService) {
  }

  ngOnInit() {
  }

  public navigateToTree(): void {
    this.router.navigateByUrl('/tree-view/' + this.treeBoard.treeId);
  }

  public delete(): void {
    this.treeBoardService.delete(this.treeBoard.id).subscribe(() => {
      this.treeBoard.deleted = true;
    });
  }
}
