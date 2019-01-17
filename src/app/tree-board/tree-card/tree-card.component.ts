import {Component, Input, OnInit} from '@angular/core';
import {TreeBoardDto} from '../types/tree.types';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TreeCardDeleteDialogComponent} from './tree-card-delete-dialog/tree-card-delete-dialog.component';

@Component({
    selector: 'delve-tree-card',
    templateUrl: './tree-card.component.html',
    styleUrls: ['./tree-card.component.scss']
})
export class TreeCardComponent implements OnInit {

    @Input()
    public treeBoard: TreeBoardDto;

    constructor(private router: Router, private dialog: MatDialog) {
    }

    ngOnInit() {
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

        dialogRef.afterClosed().subscribe(result => {
            this.treeBoard.deleted = result === true;
        });
    }
}
