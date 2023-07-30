import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ISearch } from '../../domain/base';
import { IEpisode, ILocationA } from '../../domain/model';
import { environment } from 'src/environments/environment';
import { IPagination } from 'src/app/presentation/shared/components/pagination';
import { EpisodeRymRepository, LocationRymRepository } from 'src/app/domain/repositories';

@Injectable({
    providedIn: 'root'
})
export class EpisodeRymImpRepository extends  EpisodeRymRepository {
    
    readonly api: string = environment.rickAndMortyApi;
    constructor(private http: HttpClient) {
        super();
    }
    
    search(query: IPagination): Observable<ISearch<IEpisode[]>> {
        return this.http.get<ISearch<IEpisode[]>>(
            `${this.api}episode?page=${query.currentPage}`
        ).pipe(retry(1), catchError(this.handleError));
    }
    findOne(id:Number): Observable<IEpisode> {
        return this.http.get<IEpisode>(
            `${this.api}episode/${id}`
        ).pipe(retry(1), catchError(this.handleError));
    }
    
    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        return throwError(() => {
            return errorMessage;
        });
    }
}
