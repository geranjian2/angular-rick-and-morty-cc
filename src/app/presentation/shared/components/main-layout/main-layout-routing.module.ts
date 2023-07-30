import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component:MainLayoutComponent,
    children: [{
      path: '', 
      loadChildren: () => import('../../../pages/rickandmorty/rickandmorty.module').then(m => m.RickandmortyModule)
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
