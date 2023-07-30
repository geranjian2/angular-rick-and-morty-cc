import { Observable } from "rxjs";
import { ISearch } from "../base";
import { IPagination } from "src/app/presentation/shared/components/pagination";
import { IParamsCharacterRym } from "../model";

export interface IBaseRymRepository<T> {
    search: (data: IPagination,filter?:any) => Observable<ISearch<T[]>>;
    findOne: (id:number) => Observable<T>;
  }