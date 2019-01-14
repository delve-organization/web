import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TreeViewComponent} from '../tree-view/tree-view.component';

const routes: Routes = [
  {
    path: '',
    component: TreeViewComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TreeRoutingModule {
}
