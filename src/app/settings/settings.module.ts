import {NgModule} from '@angular/core';
import {DelveCommonModule} from '../common/delve-common.module';
import {SettingsComponent} from './settings.component';
import {MaterialModule} from '../common/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SettingsRoutingModule} from './settings-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        DelveCommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        SettingsComponent
    ]
})
export class SettingsModule {
}
