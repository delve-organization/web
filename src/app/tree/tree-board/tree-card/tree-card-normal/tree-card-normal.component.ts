import {Component, Input, OnInit} from '@angular/core';
import {TreeBoardDto} from '../../tree-board.types';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TreeCardCreateOrEditDialogComponent} from '../tree-card-create-or-edit-dialog/tree-card-create-or-edit-dialog.component';
import {Accessibility, TreeDto} from '../../../tree.types';

@Component({
    selector: 'delve-tree-card-normal',
    templateUrl: './tree-card-normal.component.html',
    styleUrls: ['./tree-card-normal.component.scss']
})
export class TreeCardNormalComponent implements OnInit {

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
        const dialogRef = this.dialog.open(TreeCardCreateOrEditDialogComponent, {
            width: '350px',
            data: {
                create: false,
                treeBoardId: this.treeBoard.id,
                treeBoards: this.treeBoards,
                treeBoardIndex: this.treeBoardIndex,
                public: this.treeBoard.accessibility === Accessibility.PUBLIC,
                title: this.treeBoard.title,
                description: this.treeBoard.description,
                image: this.treeBoard.image,
                color: this.treeBoard.color,
                treeId: this.treeBoard.treeId,
                trees: this.trees
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.id !== undefined) {
                this.treeBoards[this.treeBoardIndex] = result;
            }
        });
    }
}
