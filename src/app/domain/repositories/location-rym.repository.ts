import { Observable } from 'rxjs';
import { ISearch } from '../base';
import { ILocationA } from '../model';
import { IPagination } from 'src/app/presentation/shared/components/pagination';
import { IBaseRymRepository } from './base.repository';

export abstract class LocationRymRepository implements IBaseRymRepository<ILocationA> {
    abstract search(query: IPagination): Observable<ISearch<ILocationA[]>>;
    abstract findOne(id: number):Observable<ILocationA>;
}

