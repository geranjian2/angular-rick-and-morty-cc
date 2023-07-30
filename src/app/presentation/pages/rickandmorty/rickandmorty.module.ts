import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { DetailLocationComponent } from './locations/detail-location/detail-location.component';
import { ListEpisodesComponent } from './episodes/list-episodes/list-episodes.component';
import { DetailEpisodeComponent } from './episodes/detail-episode/detail-episode.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RickandmortyRoutingModule
  ]
})
export class RickandmortyModule { }
