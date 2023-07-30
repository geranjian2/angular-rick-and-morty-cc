import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './presentation/shared/components/status/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'rick-and-morty',
        pathMatch: 'full'
    },
    {
        path: 'rick-and-morty',
        loadChildren: () => import('./presentation/shared/components/main-layout/main-layout.module').then(m => m.MainLayoutModule)
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
