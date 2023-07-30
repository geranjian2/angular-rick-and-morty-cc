import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IParams, ISearch } from 'src/app/domain/base';
import { IEpisode } from 'src/app/domain/model';
import { SearchEpisodeRymUseCase } from 'src/app/domain/uses-cases/modules/rick-and-morty';
import {
    IPagination,
    PaginationComponent,
} from 'src/app/presentation/shared/components/pagination';

@Component({
    selector: 'app-list-episodes',
    templateUrl: './list-episodes.component.html',
    styleUrls: ['./list-episodes.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, PaginationComponent],
})
export class ListEpisodesComponent {
    query: IParams = {
        filter: '',
        page: 1,
        perPage: 20,
    };
    episodes: IEpisode[] = [];
    total: number = 0;
    items: number = 0;
    pagination: IPagination = {
        currentPage: this.query.page,
        itemsPerPage: this.query.perPage,
    };
    private router: Router = inject(Router);
    private searchUseCase: SearchEpisodeRymUseCase = inject(
        SearchEpisodeRymUseCase
    );
    ngOnInit(): void {
        this.getSearch();
    }
    getSearch() {
        this.searchUseCase.search(this.pagination).subscribe({
            next: (resp: ISearch<IEpisode[]>) => {
                if (resp.info) {
                    this.episodes = resp.results;
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
    onDetail(location: IEpisode) {
        this.router
            .navigate([`./rick-and-morty/episode/${location.id}`])
            .then();
    }
}
