import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TreeBoardComponent} from '../tree-board/tree-board.component';

const routes: Routes = [
  {
    path: '',
    component: TreeBoardComponent
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
export class TreeBoardRoutingModule {
}
