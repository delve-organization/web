import {Component, OnInit} from '@angular/core';
import {CustomIconService} from '../common/services/custom-icon.service';
import {TokenStorageService} from '../auth/services/token-storage.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LocalStorageService} from '../common/services/local-storage.service';
import {StorageKey} from '../common/types/storage.types';

export interface Language {
    icon: string;
    locale: string;
}

const HU = 'hu';
const EN = 'en';

const AVAILABLE_LANGUAGES: { [key: string]: Language } = {
    'hu': {
        icon: 'hungary',
        locale: HU
    },
    'en': {
        icon: 'united-kingdom',
        locale: EN
    },
};

@Component({
    selector: 'delve-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public isLoggedIn = false;
    public isAdmin = false;
    public selectedLanguage: Language;

    constructor(private customIconService: CustomIconService, private token: TokenStorageService,
                private router: Router, private translateService: TranslateService,
                private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        this.customIconService.init();
        if (this.token.exists()) {
            this.isLoggedIn = true;
            if (this.token.getAuthorities().includes('ROLE_ADMIN')) {
                this.isAdmin = true;
            }
        }
        this.selectedLanguage = AVAILABLE_LANGUAGES[this.localStorageService.getItem(StorageKey.LOCALE)];
    }

    public openSourceOnNewTab(): void {
        window.open('https://github.com/delve-organization', '_blank');
    }

    public logout(): void {
        this.token.signOut();
        window.location.reload();
    }

    public navigateToAdmin(): void {
        this.router.navigateByUrl('/user');
    }

    public changeLanguage(): void {
        switch (this.selectedLanguage.locale) {
            case EN:
                this.selectedLanguage = AVAILABLE_LANGUAGES[HU];
                break;
            case HU:
                this.selectedLanguage = AVAILABLE_LANGUAGES[EN];
                break;
        }

        this.localStorageService.setItem(StorageKey.LOCALE, this.selectedLanguage.locale);
        this.translateService.setDefaultLang(this.selectedLanguage.locale);
    }
}
