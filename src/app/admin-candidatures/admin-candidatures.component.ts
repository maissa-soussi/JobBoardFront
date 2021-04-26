import { Component, OnInit } from '@angular/core';
import { AdminCandidaturesService } from './admin-candidatures.service';

@Component({
  selector: 'app-admin-candidatures',
  templateUrl: './admin-candidatures.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class AdminCandidaturesComponent implements OnInit {
  candidatures: any=[];
  constructor(private myservice: AdminCandidaturesService) { }

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
