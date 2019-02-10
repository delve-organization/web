import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {TreeDialogData} from '../../tree-card.types';
import {ValidationMessageFn, ValidationMessageService} from '../../../../common/services/validation-message.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Accessibility} from '../../../tree.types';
import {TreeService} from '../../../tree.service';

@Component({
    selector: 'delve-tree-card-delete-dialog',
    templateUrl: './tree-create-dialog.component.html',
    styleUrls: ['./tree-create-dialog.component.scss']
})
export class TreeCreateDialogComponent implements OnInit {

    public data: TreeDialogData;

    getErrorMessage: ValidationMessageFn;
    form: FormGroup;
    titleField: FormControl;

    constructor(public dialogRef: MatDialogRef<TreeCreateDialogComponent>,
                private validationMessageService: ValidationMessageService,
                private treeService: TreeService) {
    }

    ngOnInit(): void {
        this.data = {
            public: true,
            title: undefined,
            rootNodeId: 1 // todo: dummy data
        };

        // Fields
        this.getErrorMessage = this.validationMessageService.errorMessage.bind(this.validationMessageService);
        this.titleField = new FormControl(this.data.title, [Validators.required]);
        this.form = new FormGroup({
            'title': this.titleField
        });
        this.titleField.valueChanges.subscribe((value => this.data.title = value));
    }

    public onSaveClick(): void {
        this.treeService.create(
            this.data.title,
            this.data.rootNodeId,
            this.data.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((savedTree) => {
            this.dialogRef.close(savedTree);
        });
    }
}
