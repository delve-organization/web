import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'delve-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public readonly title = 'delve-frontend';

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        this.translate.setDefaultLang('en');
    }
}
