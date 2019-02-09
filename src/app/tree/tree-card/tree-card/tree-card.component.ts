import {Component, Input, OnInit} from '@angular/core';
import {Accessibility, TreeDto} from '../../tree.types';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TreeCardEditDialogComponent} from '../dialog/tree-card-edit-dialog/tree-card-edit-dialog.component';
import {TreeCardDto} from '../tree-card.types';

@Component({
    selector: 'delve-tree-card',
    templateUrl: './tree-card.component.html',
    styleUrls: ['./tree-card.component.scss']
})
export class TreeCardComponent implements OnInit {

    @Input() public treeCards: TreeCardDto[];
    @Input() public treeCardIndex: number;
    @Input() public trees: TreeDto[];

    public treeCard: TreeCardDto;

    private pristineTreeCard: TreeCardDto;

    constructor(private router: Router, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.treeCard = this.treeCards[this.treeCardIndex];
        this.pristineTreeCard = Object.assign({}, this.treeCard);
    }

    public navigateToTree(): void {
        this.router.navigateByUrl('/tree-view/' + this.treeCard.treeId);
    }

    public openEditDialog(): void {
        const dialogRef = this.dialog.open(TreeCardEditDialogComponent, {
            width: '400px',
            data: {
                trees: this.trees,
                treeCards: this.treeCards,
                treeCard: this.treeCard,
                treeCardIndex: this.treeCardIndex,
                public: this.treeCard.accessibility === Accessibility.PUBLIC
            }
        });

        dialogRef.afterClosed().subscribe(saved => {
            if (saved === true) {
                this.pristineTreeCard = Object.assign({}, this.treeCard);
            } else {
                this.treeCard = Object.assign({}, this.pristineTreeCard);
            }
        });
    }
}
