import { Component, OnInit } from '@angular/core';
import { OffreCandidaturesService } from './offre-candidatures.service';

@Component({
  selector: 'app-offre-candidatures',
  templateUrl: './offre-candidatures.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class OffreCandidaturesComponent implements OnInit {
  Mycandidatures: any=[];
  constructor(private myservice: OffreCandidaturesService) { }

  ngOnInit(): void {
    
  }
  
    onDelete(id:number){
      if (confirm('Are you sure to delete this candidate?'))
      {
      this.myservice.deleteMesCandidature(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }

}
