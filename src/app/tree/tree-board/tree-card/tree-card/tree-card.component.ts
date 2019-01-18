import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
    selector: 'delve-tree-card',
    templateUrl: './tree-card.component.html',
    styleUrls: ['./tree-card.component.scss']
})
export class TreeCardComponent {

    @Input() public title: string;
    @Input() public description: string;
    @Input() public color: string;
    @Input() public imageUrl: string;
    @Input() public buttonRowTemplateOutlet: TemplateRef<any>;
    @Output() public thumbClick: EventEmitter<void> = new EventEmitter();

    public emitThumbClick(): void {
        this.thumbClick.emit();
    }
}
