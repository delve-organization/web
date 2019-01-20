import {Component, Inject, OnInit} from '@angular/core';
import {CreateTreeCardDialogData} from '../../tree-board.types';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TreeBoardService} from '../../tree-board/tree-board.service';
import {Accessibility} from '../../../tree.types';
import {ImageService} from '../../../../common/services/image.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TreeCardDeleteDialogComponent} from '../tree-card-delete-dialog/tree-card-delete-dialog.component';

@Component({
    selector: 'delve-tree-card-create-or-edit-dialog',
    templateUrl: './tree-card-create-or-edit-dialog.component.html',
    styleUrls: ['./tree-card-create-or-edit-dialog.component.scss']
})
export class TreeCardCreateOrEditDialogComponent implements OnInit {

    public selectedImage: File;
    public selectedImageName: string;
    public uploadProgress: number;

    constructor(public dialogRef: MatDialogRef<TreeCardCreateOrEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CreateTreeCardDialogData,
                private treeBoardService: TreeBoardService,
                private imageService: ImageService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        if (this.data.image) {
            this.selectedImageName = this.data.image;
        }
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
        if (this.data.create) {
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
        } else {
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
