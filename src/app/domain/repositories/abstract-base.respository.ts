import { IPagination } from "src/app/presentation/shared/components/pagination";
import { Observable } from "rxjs";
import { ISearch } from "../base";

export abstract class AbstractBaseRespository<T> {
    abstract search(data: IPagination): Observable<ISearch<T[]>>;
    abstract findOne(id:number):Observable<T>;
}