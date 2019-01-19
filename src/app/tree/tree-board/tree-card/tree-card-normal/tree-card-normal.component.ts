import {Component, Input, OnInit} from '@angular/core';
import {TreeBoardDto} from '../../tree-board.types';
import {Router} from '@angular/router';
import {TreeCardDeleteDialogComponent} from '../tree-card-delete-dialog/tree-card-delete-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'delve-tree-card-normal',
    templateUrl: './tree-card-normal.component.html',
    styleUrls: ['./tree-card-normal.component.scss']
})
export class TreeCardNormalComponent implements OnInit {

    @Input() public treeBoards: TreeBoardDto[];
    @Input() public treeBoardIndex: number;

    public treeBoard: TreeBoardDto;

    constructor(private router: Router, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.treeBoard = this.treeBoards[this.treeBoardIndex];
    }

    public navigateToTree(): void {
        this.router.navigateByUrl('/tree-view/' + this.treeBoard.treeId);
    }

    public openDeleteDialog(): void {
        const dialogRef = this.dialog.open(TreeCardDeleteDialogComponent, {
            width: '250px',
            data: {
                id: this.treeBoard.id,
                title: this.treeBoard.title
            }
        });

        dialogRef.afterClosed().subscribe(deleted => {
            if (deleted === true) {
                this.treeBoards.splice(this.treeBoardIndex, 1);
            }
        });
    }
}
