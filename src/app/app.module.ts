import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NotificationModule } from './presentation/shared/components/notification';
import { EpisodeRymRepository} from './domain/repositories';
import { LocationRymRepository } from './domain/repositories/location-rym.repository';
import { LocationRymImpRepository } from './infrastructure/implementation/location-rym.imp.repository';
import { CharacterRymRepository } from './domain/repositories/character-rym.repository';
import { CharacterRymImpRepository } from './infrastructure/implementation/character-rym.imp.repository';
import { EpisodeRymImpRepository } from './infrastructure/implementation/episode-rym.imp.repository';
import { PageNotFoundComponent } from './presentation/shared/components/status/page-not-found/page-not-found.component';
import { MainLayoutModule } from './presentation/shared/components/main-layout/main-layout.module';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    providers: [
        { provide: CharacterRymRepository, useClass: CharacterRymImpRepository },
        { provide: LocationRymRepository, useClass: LocationRymImpRepository },
        { provide: EpisodeRymRepository, useClass: EpisodeRymImpRepository },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MainLayoutModule,
        AngularSvgIconModule.forRoot(),
        NotificationModule.forRoot(),
    ]
})
export class AppModule { }
