import {Component, OnInit} from '@angular/core';
import {TreeService} from '../../tree.service';
import {TreeBoardService} from './tree-board.service';
import {TreeBoardDto} from '../tree-board.types';
import {TreeDto} from '../../tree.types';
import {TreeCardCreateDialogComponent} from '../tree-card/dialog/tree-card-create-dialog/tree-card-create-dialog.component';
import {MatDialog} from '@angular/material';

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

    constructor(private treeBoardService: TreeBoardService, private treeService: TreeService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.treeBoardService.getAllAvailable().subscribe((response) => {
            this.treeBoards = response;
            this.treeBoardsLoaded = true;
        });
        this.treeService.getAllAvailableTrees().subscribe((response) => {
            this.trees = response;
            this.treesLoaded = true;
        });
    }

    public openCreateDialog(): void {
        this.dialog.open(TreeCardCreateDialogComponent, {
            width: '400px',
            data: {
                trees: this.trees,
                treeBoards: this.treeBoards,
                treeBoard: {},
                public: true
            }
        });
    }
}
