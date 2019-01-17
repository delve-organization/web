import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeleteTreeCardDialogData} from '../../types/tree.types';
import {TreeBoardService} from '../../services/tree-board.service';

@Component({
    selector: 'delve-tree-card-delete-dialog',
    templateUrl: './tree-card-delete-dialog.component.html',
    styleUrls: ['./tree-card-delete-dialog.component.scss']
})
export class TreeCardDeleteDialogComponent {

    constructor(public dialogRef: MatDialogRef<TreeCardDeleteDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DeleteTreeCardDialogData,
                private treeBoardService: TreeBoardService) {
    }

    onYesClick(): void {
        this.treeBoardService.delete(this.data.id).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
}
