import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocationA } from 'src/app/domain/model';
import { LocationRymRepository } from 'src/app/domain/repositories';


@Injectable({
    providedIn: 'root',
})
export class FindLocationRymUseCase {

    constructor(private repository: LocationRymRepository) {}

    run(id: number): Observable<ILocationA> {
        return this.repository.findOne(id)
    }
}
