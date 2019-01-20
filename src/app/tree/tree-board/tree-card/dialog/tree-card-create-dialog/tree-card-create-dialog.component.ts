import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TreeCardDialogData} from '../../tree-card.types';
import {TreeBoardService} from '../../../tree-board/tree-board.service';
import {Accessibility} from '../../../../tree.types';

@Component({
    selector: 'delve-tree-card-create-dialog',
    templateUrl: './tree-card-create-dialog.component.html',
    styleUrls: ['./tree-card-create-dialog.component.scss']
})
export class TreeCardCreateDialogComponent {


    constructor(public dialogRef: MatDialogRef<TreeCardCreateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TreeCardDialogData,
                private treeBoardService: TreeBoardService) {
    }

    public saveCard(): void {
        this.treeBoardService.create(
            this.data.treeBoard.title,
            this.data.treeBoard.description,
            this.data.treeBoard.treeId,
            this.data.treeBoard.image,
            this.data.treeBoard.color,
            this.data.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((treeBoard) => {
            this.data.treeBoards.push(treeBoard);
            this.dialogRef.close(true);
        });
    }
}
