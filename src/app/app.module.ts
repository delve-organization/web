import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CustomIconService} from './common/services/custom-icon.service';
import {NavbarComponent} from './navbar/navbar.component';
import {RoutingModule} from './routing/routing.module';
import {MaterialModule} from './common/material/material.module';
import {DelveComponentsModule} from './common/delve-components/delve-components.module';
import {FormsModule} from '@angular/forms';
import {httpInterceptorProviders} from './auth/services/auth-interceptor';
import {AdminComponent} from './admin/admin.component';

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
    DelveComponentsModule,
    FormsModule
  ],
  providers: [CustomIconService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
