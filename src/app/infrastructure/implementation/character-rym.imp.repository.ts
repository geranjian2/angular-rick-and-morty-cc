import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IParams, ISearch } from '../../domain/base';
import { ICharacter, IParamsCharacterRym } from '../../domain/model';
import { environment } from 'src/environments/environment';
import { IPagination } from 'src/app/presentation/shared/components/pagination';
import { CharacterRymRepository } from 'src/app/domain/repositories';
import { NotificationData, NotificationService } from 'src/app/presentation/shared/components/notification';

@Injectable({
    providedIn: 'root'
})
export class CharacterRymImpRepository extends CharacterRymRepository {
    
    
    readonly api: string = environment.rickAndMortyApi;
    private readonly notification: NotificationService = inject(NotificationService);
    constructor(
        private http: HttpClient, 
    ) {
        super();
    }
    search(query: IPagination, filter:IParamsCharacterRym): Observable<ISearch<ICharacter[]>> {
        return this.http.get<ISearch<ICharacter[]>>(
            `${this.api}character?page=${query.currentPage}&name=${filter.name}&status=${filter.status}&gender=${filter.gender}`
        ).pipe(retry(1), catchError(this.handleError));
    }
    findOne(id:Number): Observable<ICharacter> {
        return this.http.get<ICharacter>(
            `${this.api}character/${id}`
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
