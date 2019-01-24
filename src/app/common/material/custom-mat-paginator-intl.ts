import {MatPaginatorIntl} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {

    constructor(private translateService: TranslateService) {
        super();

        this.translateService.onDefaultLangChange.subscribe(() => {
            this.translateLabels();
        });
        this.translateLabels();
    }

    getRangeLabel = (page: number, pageSize: number, length: number): string => {
        if (length === 0 || pageSize === 0) {
            return this.translateService.instant('paginator.label.range1', { length });
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return this.translateService.instant('paginator.label.range2', { startIndex: startIndex + 1, endIndex, length });
    }

    private translateLabels() {
        this.itemsPerPageLabel = this.translateService.instant('paginator.label.itemsperpage');
        this.nextPageLabel = this.translateService.instant('paginator.label.nextpage');
        this.previousPageLabel = this.translateService.instant('paginator.label.previouspage');
        this.firstPageLabel = this.translateService.instant('paginator.label.firstpage');
        this.lastPageLabel = this.translateService.instant('paginator.label.lastpage');

        this.changes.next();
    }
}
