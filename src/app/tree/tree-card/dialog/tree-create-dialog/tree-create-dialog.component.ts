import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TreeCardDialogData, TreeDialogData} from '../../tree-card.types';
import {ValidationMessageFn, ValidationMessageService} from '../../../../common/services/validation-message.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Accessibility, CreateTreeRequest} from '../../../tree.types';
import {TreeService} from '../../../tree.service';

@Component({
    selector: 'delve-tree-card-delete-dialog',
    templateUrl: './tree-create-dialog.component.html',
    styleUrls: ['./tree-create-dialog.component.scss']
})
export class TreeCreateDialogComponent implements OnInit {

    request: CreateTreeRequest;
    newNode: boolean;
    nodeToggleDisabled: boolean;

    getErrorMessage: ValidationMessageFn;
    form: FormGroup;
    titleField: FormControl;

    constructor(private dialogRef: MatDialogRef<TreeCreateDialogComponent>,
                private validationMessageService: ValidationMessageService,
                private treeService: TreeService,
                @Inject(MAT_DIALOG_DATA) public data: TreeDialogData) {
    }

    ngOnInit(): void {
        this.request = {
            public: true,
            title: undefined,
            rootNodeId: 1 // todo: dummy data
        };
        this.newNode = true;
        this.nodeToggleDisabled = !this.data.trees.some(tree => tree.editable);

        // Fields
        this.getErrorMessage = this.validationMessageService.errorMessage.bind(this.validationMessageService);
        this.titleField = new FormControl(this.request.title, [Validators.required]);
        this.form = new FormGroup({
            'title': this.titleField
        });
        this.titleField.valueChanges.subscribe((value => this.request.title = value));
    }

    public onSaveClick(): void {
        this.treeService.create(
            this.request.title,
            this.request.rootNodeId,
            this.request.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((savedTree) => {
            this.dialogRef.close(savedTree);
        });
    }
}
