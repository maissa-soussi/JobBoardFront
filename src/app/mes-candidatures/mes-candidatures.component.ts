import { Component, OnInit } from '@angular/core';
import { MesCandidaturesService } from './mes-candidatures.service';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class MesCandidaturesComponent implements OnInit {
  candidatures: any=[];

  constructor(private myservice: MesCandidaturesService) { }

  ngOnInit(): void {
    this.getallcandidatures();
  }
  getallcandidatures()
  {
    this.myservice.getcandidatures().subscribe(
      (data: any)=>{
        this.candidatures=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.candidatures);
    }

}
