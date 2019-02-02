import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {AdminGuardService} from '../auth/services/admin-guard.service';
import {AdminComponent} from '../admin/admin.component';
import {SettingsComponent} from '../settings/settings.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'tree-board'},
    {
        path: 'tree-board',
        loadChildren: 'app/tree/tree-board/tree-board.module#TreeBoardModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'tree-view/:id',
        loadChildren: 'app/tree/tree-view/tree-view.module#TreeViewModule',
        canActivate: [AuthGuardService]
    },
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService, AdminGuardService]},
    {path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule', canActivate: [AuthGuardService]},
    {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule', canActivate: [AuthGuardService]},
    {path: '**', redirectTo: 'tree-board'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    declarations: [],
    exports: [RouterModule],
    providers: [AuthGuardService, AdminGuardService]
})
export class RoutingModule {
}
