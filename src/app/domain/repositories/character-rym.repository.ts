import { Observable } from 'rxjs';
import { ISearch } from '../base';
import { ICharacter, IParamsCharacterRym } from '../model';
import { IPagination } from 'src/app/presentation/shared/components/pagination';
import {  IBaseRymRepository } from './base.repository';

export abstract class CharacterRymRepository implements IBaseRymRepository<ICharacter> {
    abstract search(data: IPagination, filter:IParamsCharacterRym):Observable<ISearch<ICharacter[]>>;
    abstract findOne(id: number):Observable<ICharacter>;
}


