import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IEpisode } from 'src/app/domain/model';
import { FindEpisodeRymUseCase } from 'src/app/domain/uses-cases/modules/rick-and-morty';
import { NotificationData, NotificationService } from 'src/app/presentation/shared/components/notification';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive]
})
export class DetailEpisodeComponent implements OnInit {
  episode!:IEpisode
  private searchUseCase: FindEpisodeRymUseCase = inject(
    FindEpisodeRymUseCase
  );
  private activatedRoute:ActivatedRoute =  inject(ActivatedRoute)
  private readonly notification: NotificationService = inject(NotificationService);
  ngOnInit(): void {
    this.find()
  }
  find(){
    this.activatedRoute.paramMap.subscribe((params) => {
      let param: string = params.get('id')!;


      
    

      this.searchUseCase.run(parseInt(param)).subscribe( {
        next: (resp: IEpisode) => {
          this.episode = resp
        },
        error:(error)=>{
          console.log(error);
          const notifications: NotificationData = {
            type: 'danger',
            title: `Error Code: ${error.status}`,
            text: error,
          };
        this.notification.show(notifications);
        }
      })
  });
  }
}
