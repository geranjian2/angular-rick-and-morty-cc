import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadComponent: () => import('./characters/list-characters/list-characters.component').then(c => c.ListCharactersComponent),
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./characters/detail-character/detail-character.component').then(c => c.DetailCharacterComponent),
  },
  {
    path: 'locations',
    loadComponent: () => import('./locations/list-location/list-location.component').then(c => c.ListLocationComponent),
  },
  {
    path: 'location/:id',
    loadComponent: () => import('./locations/detail-location/detail-location.component').then(c => c.DetailLocationComponent),
  },
  {
    path: 'episodes',
    loadComponent: () => import('./episodes/list-episodes/list-episodes.component').then(c => c.ListEpisodesComponent),
  },
  {
    path: 'episode/:id',
    loadComponent: () => import('./episodes/detail-episode/detail-episode.component').then(c => c.DetailEpisodeComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickandmortyRoutingModule { }
