import {Component, OnInit} from '@angular/core';
import {TreeService} from '../../tree.service';
import {TreeDto} from '../../tree.types';
import {TreeCardCreateDialogComponent} from '../../tree-card/dialog/tree-card-create-dialog/tree-card-create-dialog.component';
import {MatDialog} from '@angular/material';
import {TreeCardDto} from '../../tree-card/tree-card.types';
import {TreeCardService} from '../../tree-card/tree-card.service';

@Component({
    selector: 'delve-tree-board',
    templateUrl: './tree-board.component.html',
    styleUrls: ['./tree-board.component.scss']
})
export class TreeBoardComponent implements OnInit {

    public treeCards: TreeCardDto[];
    public trees: TreeDto[];
    public treeCardsLoaded: boolean;
    public treesLoaded: boolean;
    public treeCardFilter = '';

    constructor(private treeCardService: TreeCardService, private treeService: TreeService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.treeCardService.getAllAvailable().subscribe((response) => {
            this.treeCards = response;
            this.treeCardsLoaded = true;
        });
        this.treeService.getAllAvailableTrees().subscribe((response) => {
            this.trees = response;
            this.treesLoaded = true;
        });
    }

    public openCreateDialog(): void {
        this.dialog.open(TreeCardCreateDialogComponent, {
            width: '400px',
            data: {
                trees: this.trees,
                treeCards: this.treeCards,
                treeCard: {},
                public: true
            }
        });
    }
}
