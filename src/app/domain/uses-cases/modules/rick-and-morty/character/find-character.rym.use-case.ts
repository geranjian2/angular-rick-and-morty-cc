import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearch } from 'src/app/domain/base';
import { ICharacter } from 'src/app/domain/model';
import { CharacterRymRepository } from 'src/app/domain/repositories/character-rym.repository';

import { IPagination } from 'src/app/presentation/shared/components/pagination';

@Injectable({
    providedIn: 'root',
})
export class FindCharacterRymUseCase {

    constructor(private repository: CharacterRymRepository) {}

    run(id: number): Observable<ICharacter> {
        return this.repository.findOne(id)
    }
}
