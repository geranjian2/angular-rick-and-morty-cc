import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode } from 'src/app/domain/model';
import { EpisodeRymRepository } from 'src/app/domain/repositories';


@Injectable({
    providedIn: 'root',
})
export class FindEpisodeRymUseCase {

    constructor(private repository: EpisodeRymRepository) {}

    run(id: number): Observable<IEpisode> {
        return this.repository.findOne(id)
    }
}
