import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TreeCardDialogData} from '../../tree-card.types';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {ImageService} from '../../../../../common/services/image.service';
import {ImageUploadDto} from '../../../../../common/types/image.types';

@Component({
    selector: 'delve-tree-card-create-or-edit',
    templateUrl: './tree-card-create-or-edit.component.html',
    styleUrls: ['./tree-card-create-or-edit.component.scss']
})
export class TreeCardCreateOrEditComponent implements OnInit {

    @Input() public title: string;
    @Input() public deleteVisible: boolean;
    @Input() public data: TreeCardDialogData;
    @Output() public saveClick: EventEmitter<void> = new EventEmitter();
    @Output() public deleteClick: EventEmitter<void> = new EventEmitter();

    public selectedImage: File;
    public selectedImageName: string;
    public uploadProgress: number;

    public colorChanged: boolean;
    public imageChanged: boolean;

    constructor(private imageService: ImageService) {
    }

    ngOnInit(): void {
        if (this.data.treeCard.image) {
            this.selectedImageName = this.data.treeCard.image;
        }
    }

    public onFileChanged(event): void {
        this.selectedImage = event.target.files[0];
        this.selectedImageName = this.selectedImage.name;
        this.uploadProgress = 0;
        this.data.treeCard.image = undefined;
    }

    public onUploadClick(): void {
        this.uploadProgress = 0;

        this.imageService.upload(this.selectedImage).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                const imageUpload: ImageUploadDto = event.body as ImageUploadDto;

                this.data.treeCard.image = imageUpload.imageName;
                this.data.treeCard.imageUrl = imageUpload.imageUrl;
                this.imageChanged = true;
                this.selectedImage = undefined;
            }
        });
    }

    public onSaveClick(): void {
        this.saveClick.emit();
    }

    public onDeleteClick(): void {
        this.deleteClick.emit();
    }

    public onColorPickerChange(): void {
        this.colorChanged = true;
    }
}
