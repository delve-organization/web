import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {NodeSelectorDialogData} from "../../tree-card.types";
import {PiIframeComponent} from "@ping/pi-iframe";
import {
    APP_LOADED_KEY,
    APP_MODE_KEY,
    AppMode,
    NODE_DATA_INPUT_KEY, SELECTED_NODE_DATA_KEY, SelectedNodeData,
    USER_NODE_RELATION_DATA_INPUT_KEY
} from "@delve/tree-chart-api";

@Component({
    selector: 'delve-node-select-dialog',
    templateUrl: './node-select-dialog.component.html',
    styleUrls: ['./node-select-dialog.component.scss']
})
export class NodeSelectDialogComponent implements OnInit {

    @ViewChild('piIframe', {read: PiIframeComponent}) piIframe: PiIframeComponent;

    constructor(private dialogRef: MatDialogRef<NodeSelectDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: NodeSelectorDialogData) {
    }

    ngOnInit() {
        this.piIframe.listen(APP_LOADED_KEY, () => {
            this.piIframe.post(APP_MODE_KEY, AppMode.SELECTOR);
            this.piIframe.post(NODE_DATA_INPUT_KEY, this.data.rootNode);
            this.piIframe.post(USER_NODE_RELATION_DATA_INPUT_KEY, []);
        });
        this.piIframe.listen(SELECTED_NODE_DATA_KEY, (node: SelectedNodeData) => {
            this.dialogRef.close(node);
        });
    }
}
