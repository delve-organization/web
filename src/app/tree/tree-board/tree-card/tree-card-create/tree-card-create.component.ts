import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TreeCardCreateOrEditDialogComponent} from '../tree-card-create-or-edit-dialog/tree-card-create-or-edit-dialog.component';
import {TreeBoardDto} from '../../tree-board.types';
import {TreeDto} from '../../../tree.types';

@Component({
    selector: 'delve-tree-card-create',
    templateUrl: './tree-card-create.component.html',
    styleUrls: ['./tree-card-create.component.scss']
})
export class TreeCardCreateComponent {

    @Input() public treeBoards: TreeBoardDto[];
    @Input() public trees: TreeDto[];

    constructor(private dialog: MatDialog) {
    }

    public openCreateDialog(): void {
        const dialogRef = this.dialog.open(TreeCardCreateOrEditDialogComponent, {
            width: '350px',
            data: {
                create: true,
                public: true,
                trees: this.trees
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result.id !== undefined) {
                this.treeBoards.push(result);
            }
        });
    }
}
