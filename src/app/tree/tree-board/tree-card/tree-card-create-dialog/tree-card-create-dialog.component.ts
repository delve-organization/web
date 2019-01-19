import {Component, Inject} from '@angular/core';
import {CreateTreeCardDialogData} from '../../tree-board.types';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TreeBoardService} from '../../tree-board/tree-board.service';
import {Accessibility} from '../../../tree.types';
import {ImageService} from '../../../../common/services/image.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
    selector: 'delve-tree-card-create-dialog',
    templateUrl: './tree-card-create-dialog.component.html',
    styleUrls: ['./tree-card-create-dialog.component.scss']
})
export class TreeCardCreateDialogComponent {

    public selectedImage: File;
    public selectedImageName: string;
    public uploadProgress: number;

    constructor(public dialogRef: MatDialogRef<TreeCardCreateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CreateTreeCardDialogData,
                private treeBoardService: TreeBoardService,
                private imageService: ImageService) {
    }

    public onFileChanged(event): void {
        this.selectedImage = event.target.files[0];
        this.selectedImageName = this.selectedImage.name;
        this.uploadProgress = 0;
        this.data.image = undefined;
    }

    public onUploadClick(): void {
        this.uploadProgress = 0;

        this.imageService.upload(this.selectedImage).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                this.data.image = event.body.toString();
            }
        });
    }

    public onSaveClick(): void {
        this.treeBoardService.create(
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
}
