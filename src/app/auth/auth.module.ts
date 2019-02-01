import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MaterialModule} from '../common/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './routing/auth-routing.module';
import {DelveCommonModule} from '../common/delve-common.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        DelveCommonModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule {
}
