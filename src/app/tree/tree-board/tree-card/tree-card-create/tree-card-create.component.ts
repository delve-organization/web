import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TreeCardCreateDialogComponent} from '../tree-card-create-dialog/tree-card-create-dialog.component';
import {TreeBoardDto} from '../../tree-board.types';

@Component({
    selector: 'delve-tree-card-create',
    templateUrl: './tree-card-create.component.html',
    styleUrls: ['./tree-card-create.component.scss']
})
export class TreeCardCreateComponent {

    @Input() public treeBoards: TreeBoardDto[];

    constructor(private dialog: MatDialog) {
    }

    public openCreateDialog(): void {
        const dialogRef = this.dialog.open(TreeCardCreateDialogComponent, {
            width: '350px',
            data: {
                public: true
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.id !== undefined) {
                this.treeBoards.push(result);
            }
        });
    }
}
