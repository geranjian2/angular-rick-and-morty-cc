
export interface ISearch<T> {
    info:    IPaginator;
    results: T;
}

export interface IPaginator {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}
