import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeleteTreeCardDialogData} from '../../tree-card.types';
import {TreeCardService} from '../../tree-card.service';

@Component({
    selector: 'delve-tree-card-delete-dialog',
    templateUrl: './tree-create-dialog.component.html',
    styleUrls: ['./tree-create-dialog.component.scss']
})
export class TreeCreateDialogComponent {

    constructor(public dialogRef: MatDialogRef<TreeCreateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DeleteTreeCardDialogData,
                private treeCardService: TreeCardService) {
    }

    onYesClick(): void {
        this.treeCardService.delete(this.data.id).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
}
