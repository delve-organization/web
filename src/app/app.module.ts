import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {RoutingModule} from './routing/routing.module';
import {MaterialModule} from './common/material/material.module';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth/services/auth-interceptor';
import {AdminComponent} from './admin/admin.component';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoaderFactory} from './common/factory/translate.factory';
import {ErrorHandlerService} from './common/services/error-handler.service';
import {ApiErrorComponent} from './common/error/apierror/api-error.component';
import {DelveCommonModule} from './common/delve-common.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        RoutingModule,
        CommonModule,
        FormsModule,
        DelveCommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslateHttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: ErrorHandler, useClass: ErrorHandlerService}
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        ApiErrorComponent
    ]
})
export class AppModule {
}

