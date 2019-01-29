import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './components/loading/loading.component';
import {MaterialModule} from './material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ApiErrorComponent} from './error/apierror/api-error.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        MaterialModule
    ],
    declarations: [
        LoadingComponent,
        ApiErrorComponent
    ],
    exports: [
        LoadingComponent,
        TranslateModule,
        ApiErrorComponent
    ]
})
export class DelveCommonModule {
}
