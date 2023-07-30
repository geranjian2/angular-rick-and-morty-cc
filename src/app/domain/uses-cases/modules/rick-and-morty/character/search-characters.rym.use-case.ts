import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/domain/base';
import { ICharacter, IParamsCharacterRym } from 'src/app/domain/model';
import { CharacterRymRepository } from 'src/app/domain/repositories/character-rym.repository';

import { IPagination } from 'src/app/presentation/shared/components/pagination';

@Injectable({
    providedIn: 'root',
})
export class SearchCharactersRymUseCase {

    constructor(private repository: CharacterRymRepository) {}

    search(query: IPagination, filter:IParamsCharacterRym): Observable<ISearch<ICharacter[]>> {
        return this.repository.search(query, filter);
    }
}
