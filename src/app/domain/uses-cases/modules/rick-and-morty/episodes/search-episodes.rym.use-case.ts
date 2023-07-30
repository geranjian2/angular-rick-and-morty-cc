import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/domain/base';
import { IEpisode } from 'src/app/domain/model';
import { EpisodeRymRepository } from 'src/app/domain/repositories';


import { IPagination } from 'src/app/presentation/shared/components/pagination';

@Injectable({
    providedIn: 'root',
})
export class SearchEpisodeRymUseCase {

    constructor(private repository: EpisodeRymRepository) {}

    search(query: IPagination): Observable<ISearch<IEpisode[]>> {
        return this.repository.search(query);
    }
}
