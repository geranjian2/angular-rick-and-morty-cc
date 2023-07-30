import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ILocationA } from 'src/app/domain/model';
import { FindLocationRymUseCase } from 'src/app/domain/uses-cases/modules/rick-and-morty';
import { NotificationData, NotificationService } from 'src/app/presentation/shared/components/notification';

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
})
export class DetailLocationComponent implements OnInit {
 
  location!:ILocationA
  private searchUseCase: FindLocationRymUseCase = inject(
    FindLocationRymUseCase
  );
  private activatedRoute:ActivatedRoute =  inject(ActivatedRoute)
  private readonly notification: NotificationService = inject(NotificationService);
  ngOnInit(): void {
    this.getLocation()
  }
  getLocation(){
    this.activatedRoute.paramMap.subscribe((params) => {
      let param: string = params.get('id')!;


      
    

      this.searchUseCase.run(parseInt(param)).subscribe( {
        next: (resp: ILocationA) => {
          this.location = resp
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
