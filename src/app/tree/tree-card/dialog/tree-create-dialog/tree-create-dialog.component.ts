import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSelectChange} from '@angular/material';
import {TreeDialogData} from '../../tree-card.types';
import {ValidationMessageFn, ValidationMessageService} from '../../../../common/services/validation-message.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Accessibility, CreateTreeRequestData, TreeDto} from '../../../tree.types';
import {TreeService} from '../../../tree.service';
import {NodeDto} from '../../../tree-view/tree-node/tree-node.types';
import {NodeService} from '../../../tree-view/tree-node/node.service';

@Component({
    selector: 'delve-tree-card-delete-dialog',
    templateUrl: './tree-create-dialog.component.html',
    styleUrls: ['./tree-create-dialog.component.scss']
})
export class TreeCreateDialogComponent implements OnInit {

    requestData: CreateTreeRequestData;
    newNode: boolean;
    nodeToggleDisabled: boolean;
    availableTrees: TreeDto[];

    getErrorMessage: ValidationMessageFn;
    form: FormGroup;
    titleField: FormControl;

    private rootNode: NodeDto;

    constructor(private dialogRef: MatDialogRef<TreeCreateDialogComponent>,
                private validationMessageService: ValidationMessageService,
                private treeService: TreeService,
                private nodeService: NodeService,
                @Inject(MAT_DIALOG_DATA) private data: TreeDialogData) {
    }

    ngOnInit(): void {
        this.requestData = {
            public: true,
            title: undefined
        };
        this.newNode = true;
        this.availableTrees = this.data.trees.filter(tree => tree.editable);
        this.nodeToggleDisabled = this.availableTrees.length < 1;

        // Fields
        this.getErrorMessage = this.validationMessageService.errorMessage.bind(this.validationMessageService);
        this.titleField = new FormControl(this.requestData.title, [Validators.required]);
        this.form = new FormGroup({
            'title': this.titleField
        });
        this.titleField.valueChanges.subscribe((value => this.requestData.title = value));
    }

    onSaveClick(): void {
        this.treeService.create(
            this.requestData.title,
            this.rootNode.id,
            this.requestData.public ? Accessibility.PUBLIC : Accessibility.PRIVATE
        ).subscribe((savedTree) => {
            this.dialogRef.close(savedTree);
        });
    }

    onTreeSelectChange(event: MatSelectChange): void {
        this.nodeService.getNodesFromRoot(event.value.rootNodeId).subscribe(node => {
            this.rootNode = node;
        });
    }
}
