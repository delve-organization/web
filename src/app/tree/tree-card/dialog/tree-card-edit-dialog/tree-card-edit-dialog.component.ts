import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TreeCardDialogData} from '../../tree-card.types';
import {ImageService} from '../../../../common/services/image.service';
import {TreeCardDeleteDialogComponent} from '../tree-card-delete-dialog/tree-card-delete-dialog.component';
import {Accessibility} from '../../../tree.types';
import {TreeCardService} from '../../tree-card.service';

@Component({
    selector: 'delve-tree-card-edit-dialog',
    templateUrl: './tree-card-edit-dialog.component.html',
    styleUrls: ['./tree-card-edit-dialog.component.scss']
})
export class TreeCardEditDialogComponent {

    constructor(public dialogRef: MatDialogRef<TreeCardEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TreeCardDialogData,
                private treeCardService: TreeCardService,
                private imageService: ImageService, private dialog: MatDialog) {
    }

    public saveCard(): void {
        this.treeCardService.edit(
            this.data.treeCard.id,
            this.data.treeCard.title,
            this.data.treeCard.description,
            this.data.treeCard.treeId,
            this.data.treeCard.image,
            this.data.treeCard.color,
            this.data.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe(() => {
            this.dialogRef.close(true);
        });
    }

    public openDeleteDialog(): void {
        const dialogRef = this.dialog.open(TreeCardDeleteDialogComponent, {
            width: '250px',
            data: {
                id: this.data.treeCard.id,
                title: this.data.treeCard.title
            }
        });

        dialogRef.afterClosed().subscribe(deleted => {
            if (deleted === true) {
                this.data.treeCards.splice(this.data.treeCardIndex, 1);
                this.dialogRef.close(false);
            }
        });
    }
}
