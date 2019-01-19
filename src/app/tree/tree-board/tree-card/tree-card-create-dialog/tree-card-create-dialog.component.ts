import {Component, Inject} from '@angular/core';
import {CreateTreeCardDialogData} from '../../tree-board.types';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TreeBoardService} from '../../tree-board/tree-board.service';
import {Accessibility} from '../../../tree.types';

@Component({
    selector: 'delve-tree-card-create-dialog',
    templateUrl: './tree-card-create-dialog.component.html',
    styleUrls: ['./tree-card-create-dialog.component.scss']
})
export class TreeCardCreateDialogComponent {

    constructor(public dialogRef: MatDialogRef<TreeCardCreateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CreateTreeCardDialogData,
                private treeBoardService: TreeBoardService) {
    }

    public onSaveClick(): void {
        this.treeBoardService.create(
            this.data.title,
            this.data.description,
            1,
            'fat_cat.png',
            this.data.color,
            this.data.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((treeBoard) => {
            this.dialogRef.close(treeBoard);
        });
    }
}
