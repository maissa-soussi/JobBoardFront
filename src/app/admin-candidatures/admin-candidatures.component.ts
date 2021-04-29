import { Component, OnInit } from '@angular/core';
import { AdminCandidaturesService } from './admin-candidatures.service';

@Component({
  selector: 'app-admin-candidatures',
  templateUrl: './admin-candidatures.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class AdminCandidaturesComponent implements OnInit {
  candidatures: any=[];
  t:any={};
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
    onDelete(id:number){
      if (confirm('Are you sure to delete this candidate?'))
      {
      this.myservice.deleteCandidature(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }
    updateOffre(id:any,offre:any)
    {
      console.log(offre)
      this.myservice.updateCandidature(id,offre).subscribe(
        (data)=>{
          alert("modification avec succes");
          window.location.reload()
          return data;
        },
        (err)=>{
          alert("erreur");
          console.log(err);
        }
      );
      
    }
    test(objet:any)
    {
      console.log(objet)
 this.t=objet;
 console.log(this.t)
    }

}
