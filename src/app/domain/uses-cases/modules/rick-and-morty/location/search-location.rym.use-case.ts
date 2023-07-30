import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/domain/base';
import { ICharacter, ILocationA } from 'src/app/domain/model';
import { LocationRymRepository } from 'src/app/domain/repositories';

import { IPagination } from 'src/app/presentation/shared/components/pagination';

@Injectable({
    providedIn: 'root',
})
export class SearchLocationRymUseCase {

    constructor(private repository: LocationRymRepository) {}

    search(query: IPagination): Observable<ISearch<ILocationA[]>> {
        return this.repository.search(query);
    }
}
