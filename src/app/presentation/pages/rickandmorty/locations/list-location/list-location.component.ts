import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IParams, ISearch } from 'src/app/domain/base';
import { ILocationA } from 'src/app/domain/model';
import { SearchLocationRymUseCase } from 'src/app/domain/uses-cases/modules/rick-and-morty';

import {
    IPagination,
    PaginationComponent,
} from 'src/app/presentation/shared/components/pagination';

@Component({
    selector: 'app-list-location',
    templateUrl: './list-location.component.html',
    styleUrls: ['./list-location.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, PaginationComponent],
})
export class ListLocationComponent implements OnInit {
    query: IParams = {
        filter: 'manuel',
        page: 1,
        perPage: 20,
    };
    locations: ILocationA[] = [];
    total: number = 0;
    items:number = 0;
    pagination: IPagination = {
        currentPage: this.query.page,
        itemsPerPage: this.query.perPage,
    };
    private router: Router = inject(Router);
    private searchUseCase: SearchLocationRymUseCase = inject(
        SearchLocationRymUseCase
    );
    ngOnInit(): void {
        this.getSearch()
    }
    getSearch() {
        this.searchUseCase.search(this.pagination).subscribe({
            next: (resp: ISearch<ILocationA[]>) => {
                if (resp.info) {
                    this.locations = resp.results;
                }
                this.total = resp.info.pages;
                this.items = resp.info.count;
            },
        });
    }
    setPage(event: IPagination): void {
        this.query.perPage = event.itemsPerPage;
        this.query.page = event.currentPage;
        this.getSearch();
    }
    onDetail(location: ILocationA) {
    this.router.navigate([`./rick-and-morty/location/${location.id}`]).then();
    }
}
