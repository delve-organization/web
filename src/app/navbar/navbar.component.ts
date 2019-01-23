import {Component, OnInit} from '@angular/core';
import {CustomIconService} from '../common/services/custom-icon.service';
import {TokenStorageService} from '../auth/services/token-storage.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

export interface Language {
    icon: string;
    locale: string;
}

const LANG_HU: Language = {
    icon: 'hungary',
    locale: 'hu'
};
const LANG_EN: Language = {
    icon: 'united-kingdom',
    locale: 'en'
};

@Component({
    selector: 'delve-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public isLoggedIn = false;
    public isAdmin = false;
    public selectedLanguage: Language = LANG_EN;

    constructor(private customIconService: CustomIconService, private token: TokenStorageService,
                private router: Router, private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.customIconService.init();
        if (this.token.exists()) {
            this.isLoggedIn = true;
            if (this.token.getAuthorities().includes('ROLE_ADMIN')) {
                this.isAdmin = true;
            }
        }
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
        switch (this.selectedLanguage) {
            case LANG_EN:
                this.selectedLanguage = LANG_HU;
                break;
            case LANG_HU:
                this.selectedLanguage = LANG_EN;
                break;
        }

        this.translateService.setDefaultLang(this.selectedLanguage.locale);
    }
}
