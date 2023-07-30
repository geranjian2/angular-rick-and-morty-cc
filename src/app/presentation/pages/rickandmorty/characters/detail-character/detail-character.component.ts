import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ICharacter } from 'src/app/domain/model';
import { FindCharacterRymUseCase } from 'src/app/domain/uses-cases/modules/rick-and-morty';
import { NotificationData, NotificationService } from 'src/app/presentation/shared/components/notification';
import { ChangeStatusColorDirective } from 'src/app/presentation/shared/directives';
import { AliveOrDeadPipe } from 'src/app/presentation/shared/pipes';
import { SendInformationService } from 'src/app/presentation/shared/service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive,AliveOrDeadPipe, ChangeStatusColorDirective],
})
export class DetailCharacterComponent implements OnInit {
  character!:ICharacter
  private searchUseCase: FindCharacterRymUseCase = inject(
    FindCharacterRymUseCase
  );
  private readonly notification: NotificationService = inject(NotificationService);
  private activatedRoute:ActivatedRoute =  inject(ActivatedRoute)
  ngOnInit(): void {
    this.getCharacter()
  }
  getCharacter(){
    this.activatedRoute.paramMap.subscribe((params) => {
      let param: string = params.get('id')!;


      
    

      this.searchUseCase.run(parseInt(param)).subscribe( {
        next: (resp: ICharacter) => {
          this.character = resp
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
