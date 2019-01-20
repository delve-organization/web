import {Component, Input, OnInit} from '@angular/core';
import {TreeBoardDto} from '../../tree-board.types';
import {Accessibility, TreeDto} from '../../../tree.types';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TreeCardEditDialogComponent} from '../dialog/tree-card-edit-dialog/tree-card-edit-dialog.component';

@Component({
    selector: 'delve-tree-card',
    templateUrl: './tree-card.component.html',
    styleUrls: ['./tree-card.component.scss']
})
export class TreeCardComponent implements OnInit {

    @Input() public treeBoards: TreeBoardDto[];
    @Input() public treeBoardIndex: number;
    @Input() public trees: TreeDto[];

    public treeBoard: TreeBoardDto;

    private pristineTreeBoard: TreeBoardDto;

    constructor(private router: Router, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.treeBoard = this.treeBoards[this.treeBoardIndex];
        this.pristineTreeBoard = Object.assign({}, this.treeBoard);
    }

    public navigateToTree(): void {
        this.router.navigateByUrl('/tree-view/' + this.treeBoard.treeId);
    }

    public openEditDialog(): void {
        const dialogRef = this.dialog.open(TreeCardEditDialogComponent, {
            width: '400px',
            data: {
                trees: this.trees,
                treeBoards: this.treeBoards,
                treeBoard: this.treeBoard,
                treeBoardIndex: this.treeBoardIndex,
                public: this.treeBoard.accessibility === Accessibility.PUBLIC
            }
        });

        dialogRef.afterClosed().subscribe(saved => {
            if (saved === true) {
                this.pristineTreeBoard = Object.assign({}, this.treeBoard);
            } else {
                this.treeBoard = Object.assign({}, this.pristineTreeBoard);
            }
        });
    }
}
