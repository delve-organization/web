import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TreeCardDialogData} from '../../tree-card.types';
import {Accessibility} from '../../../tree.types';
import {TreeCardService} from '../../tree-card.service';

@Component({
    selector: 'delve-tree-card-create-dialog',
    templateUrl: './tree-card-create-dialog.component.html',
    styleUrls: ['./tree-card-create-dialog.component.scss']
})
export class TreeCardCreateDialogComponent {


    constructor(public dialogRef: MatDialogRef<TreeCardCreateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TreeCardDialogData,
                private treeCardService: TreeCardService) {
    }

    public saveCard(): void {
        this.treeCardService.create(
            this.data.treeCard.title,
            this.data.treeCard.description,
            this.data.treeCard.treeId,
            this.data.treeCard.image,
            this.data.treeCard.color,
            this.data.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((treeBoard) => {
            this.data.treeCards.push(treeBoard);
            this.dialogRef.close(true);
        });
    }
}
