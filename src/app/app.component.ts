import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageKey} from './common/types/storage.types';
import {LocalStorageService} from './common/services/local-storage.service';

@Component({
    selector: 'delve-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public readonly title = 'delve-frontend';

    constructor(private translate: TranslateService, private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        if (!this.localStorageService.getItem(StorageKey.LOCALE)) {
            this.localStorageService.setItem(StorageKey.LOCALE, 'en');
        }
        this.translate.setDefaultLang(this.localStorageService.getItem(StorageKey.LOCALE));
    }
}
