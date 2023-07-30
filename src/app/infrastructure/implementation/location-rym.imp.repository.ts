import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IParams, ISearch } from '../../domain/base';
import { ICharacter, ILocationA } from '../../domain/model';
import { environment } from 'src/environments/environment';
import { IPagination } from 'src/app/presentation/shared/components/pagination';
import { LocationRymRepository } from 'src/app/domain/repositories';

@Injectable({
    providedIn: 'root'
})
export class LocationRymImpRepository extends LocationRymRepository {
    
    readonly api: string = environment.rickAndMortyApi;
    constructor(private http: HttpClient) {
        super();
    }
    search(query: IPagination): Observable<ISearch<ILocationA[]>> {
        return this.http.get<ISearch<ILocationA[]>>(
            `${this.api}location?page=${query.currentPage}`
        ).pipe(retry(1), catchError(this.handleError));
    }
    findOne(id:Number): Observable<ILocationA> {
        return this.http.get<ILocationA>(
            `${this.api}location/${id}`
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
