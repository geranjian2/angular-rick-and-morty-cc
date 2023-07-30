import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IParams, ISearch } from 'src/app/domain/base';
import { ICharacter, IParamsCharacterRym } from 'src/app/domain/model';
import { SearchCharactersRymUseCase } from 'src/app/domain/uses-cases/modules/rick-and-morty';
import { IPagination, PaginationComponent } from 'src/app/presentation/shared/components/pagination';
import { ChangeStatusColorDirective } from 'src/app/presentation/shared/directives';
import { AliveOrDeadPipe } from 'src/app/presentation/shared/pipes';


@Component({
    selector: 'app-list-characters',
    standalone: true,
    imports: [CommonModule, FormsModule, PaginationComponent, AliveOrDeadPipe, ChangeStatusColorDirective],
    templateUrl: './list-characters.component.html',
    styleUrls: ['./list-characters.component.scss'],
    animations:[
        trigger('opacityScale', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(.95)' }),
                animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'scale(1)' }),
                animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
            ])
        ]),
    ]
})
export class ListCharactersComponent implements OnInit {
    query: IParams = {
        filter: '',
        page: 1,
        perPage: 20
    }
    filter:IParamsCharacterRym={
        name:'',
        status:'',
        gender:''
    };
    characters: ICharacter[] = [];
    total: number = 0;
    items: number = 0;
    pagination: IPagination = {
        currentPage: this.query.page,
        itemsPerPage: this.query.perPage,
    };

    count: number = 0;
    intervalId: any;
    viewSkeleton = false

    private searchUseCase: SearchCharactersRymUseCase = inject(
        SearchCharactersRymUseCase
    );
    private router: Router = inject(Router);
    ngOnInit(): void {
      this.getSearch()
    }
    getSearch() {
        this.searchUseCase.search(this.pagination, this.filter ).subscribe({
            next: (resp: ISearch<ICharacter[]>) => {
                this.characters = []
                if (resp.info) {
                    this.characters = resp.results;
                }
                this.total = resp.info.pages;
                this.items = resp.info.count;
            },
            error:()=>{
                this.characters = []
                this.total=0
                this.items=0
            }
        });
    }
    setPage(event: IPagination): void {
        this.startCounting()
        this.query.perPage = event.itemsPerPage;
        this.query.page = event.currentPage;
        this.getSearch();
    }


    startCounting() {
        this.viewSkeleton=true
        this.intervalId = setInterval(() => {
          if (this.count < 1) {
            this.count++;
          } else {
            this.viewSkeleton=false
            this.stopCounting();
          }
        }, 1000);
      }
    
    stopCounting() {
        clearInterval(this.intervalId);
    }
    onDetail(character:ICharacter){
        this.router.navigate([`./rick-and-morty/character/${character.id}`]).then();
    }
    onSearch(): void {
        this.pagination.currentPage= 1;
        this.pagination.itemsPerPage = 20
        this.getSearch()
    }
    ngOnDestroy() {
        this.stopCounting();
    }
}
