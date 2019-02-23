import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TreeService} from '../../tree.service';
import {TreeDto} from '../../tree.types';
import {PiIframeComponent} from "@ping/pi-iframe";
import {
    APP_LOADED_KEY,
    APP_MODE_KEY,
    AppMode,
    NODE_DATA_INPUT_KEY,
    USER_NODE_RELATION_DATA_CHANGE_KEY,
    USER_NODE_RELATION_DATA_INPUT_KEY,
    UserNodeRelationData
} from '@delve/tree-chart-api';
import {NodeService} from "../node.service";

@Component({
    selector: 'delve-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

    @ViewChild('piIframe', {read: PiIframeComponent}) piIframe: PiIframeComponent;

    tree: TreeDto;
    treeLoaded: boolean;
    nodeData;

    constructor(private route: ActivatedRoute, private treeService: TreeService, private nodeService: NodeService) {
    }

    ngOnInit() {
        this.piIframe.listen(APP_LOADED_KEY, () => {
            this.piIframe.post(APP_MODE_KEY, AppMode.NORMAL);

            this.route.params.subscribe(params => {
                const treeId: number = +params['id'];
                this.treeService.getTreeById(treeId).subscribe(treeData => {
                    this.tree = treeData;
                    this.treeLoaded = true;

                    this.nodeService.getNodesFromRoot(this.tree.rootNodeId).subscribe(nodeData => {
                        this.nodeData = nodeData;
                        this.piIframe.post(NODE_DATA_INPUT_KEY, nodeData);
                    });
                    this.nodeService.getRelationsByUser().subscribe(relationsData => {
                        this.piIframe.post(USER_NODE_RELATION_DATA_INPUT_KEY, relationsData);
                    });
                });
            });
        });
        this.piIframe.listen<UserNodeRelationData>(USER_NODE_RELATION_DATA_CHANGE_KEY, (relation: UserNodeRelationData) => {
            this.nodeService.setRelation(relation.nodeId, relation.visited).subscribe(() => {
                this.piIframe.post<UserNodeRelationData>(USER_NODE_RELATION_DATA_CHANGE_KEY, relation);
            });
        });
    }
}
