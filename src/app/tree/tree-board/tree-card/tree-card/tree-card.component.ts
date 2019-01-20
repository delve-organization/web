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

    constructor(private router: Router, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.treeBoard = this.treeBoards[this.treeBoardIndex];
    }

    public navigateToTree(): void {
        this.router.navigateByUrl('/tree-view/' + this.treeBoard.treeId);
    }

    public openEditDialog(): void {
        const dialogRef = this.dialog.open(TreeCardEditDialogComponent, {
            width: '350px',
            data: {
                title: this.treeBoard.title,
                description: this.treeBoard.description,
                public: this.treeBoard.accessibility === Accessibility.PUBLIC,
                image: this.treeBoard.image,
                color: this.treeBoard.color,
                trees: this.trees,
                treeId: this.treeBoard.treeId,

                treeBoards: this.treeBoards,
                treeBoardIndex: this.treeBoardIndex,
                treeBoardId: this.treeBoard.id
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.id !== undefined) {
                this.treeBoards[this.treeBoardIndex] = result;
            }
        });
    }
}
