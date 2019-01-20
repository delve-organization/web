import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {EditTreeCardDialogData} from '../../tree-card.types';
import {TreeBoardService} from '../../../tree-board/tree-board.service';
import {ImageService} from '../../../../../common/services/image.service';
import {TreeCardDeleteDialogComponent} from '../tree-card-delete-dialog/tree-card-delete-dialog.component';
import {Accessibility} from '../../../../tree.types';

@Component({
    selector: 'delve-tree-card-edit-dialog',
    templateUrl: './tree-card-edit-dialog.component.html',
    styleUrls: ['./tree-card-edit-dialog.component.scss']
})
export class TreeCardEditDialogComponent {

    constructor(public dialogRef: MatDialogRef<TreeCardEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: EditTreeCardDialogData,
                private treeBoardService: TreeBoardService,
                private imageService: ImageService, private dialog: MatDialog) {
    }

    public saveCard(): void {
        this.treeBoardService.edit(
            this.data.treeBoardId,
            this.data.title,
            this.data.description,
            this.data.treeId,
            this.data.image,
            this.data.color,
            this.data.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((treeBoard) => {
            this.dialogRef.close(treeBoard);
        });
    }

    public openDeleteDialog(): void {
        const dialogRef = this.dialog.open(TreeCardDeleteDialogComponent, {
            width: '250px',
            data: {
                id: this.data.treeBoardId,
                title: this.data.title
            }
        });

        dialogRef.afterClosed().subscribe(deleted => {
            if (deleted === true) {
                this.data.treeBoards.splice(this.data.treeBoardIndex, 1);
                this.dialogRef.close(false);
            }
        });
    }
}
