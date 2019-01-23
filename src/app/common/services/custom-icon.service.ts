import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CustomIconService {

    private static readonly SVG_PATH: string = '../assets/icons/';

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    }

    public init(): void {
        this.register('delve', 'shovel');
        this.register('bitbucket', 'bitbucket');
        this.register('github', 'github');
        this.register('united-kingdom', 'united-kingdom');
        this.register('hungary', 'hungary');
    }

    private register(name: string, svg: string): void {
        this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(CustomIconService.SVG_PATH + svg + '.svg'));
    }
}
