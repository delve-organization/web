import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {NodeSelectorDialogData} from "../../tree-card.types";
import {PiIframeComponent} from "@ping/pi-iframe";
import {APP_LOADED_KEY, NODE_DATA_INPUT_KEY, USER_NODE_RELATION_DATA_INPUT_KEY} from "@delve/tree-chart-api";

@Component({
    selector: 'delve-node-select-dialog',
    templateUrl: './node-select-dialog.component.html',
    styleUrls: ['./node-select-dialog.component.scss']
})
export class NodeSelectDialogComponent implements OnInit {

    @ViewChild('piIframe', {read: PiIframeComponent}) piIframe: PiIframeComponent;

    constructor(@Inject(MAT_DIALOG_DATA) private data: NodeSelectorDialogData) {
    }

    ngOnInit() {
        this.piIframe.listen(APP_LOADED_KEY, () => {
            this.piIframe.post(NODE_DATA_INPUT_KEY, this.data.rootNode);
            this.piIframe.post(USER_NODE_RELATION_DATA_INPUT_KEY, []);
        });
    }
}
