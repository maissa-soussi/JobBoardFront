import { Component, OnInit } from '@angular/core';
import { AdminCandidaturesService } from './admin-candidatures.service';
import { HttpClient } from '@angular/common/http';
import { AdminOffresComponent } from '../admin-offres/admin-offres.component';

@Component({
  selector: 'app-admin-candidatures',
  templateUrl: './admin-candidatures.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class AdminCandidaturesComponent implements OnInit {
  candidatures: any=[];
  t:any={};
  id:any;
  public Statuses: any[] = []
  constructor(private myservice: AdminCandidaturesService, public http: HttpClient) { }


  ngOnInit(): void {
    this.getallcandidatures();
    console.log(this.id);
    this.http.get<any>("https://localhost:44338/Status")
      .subscribe(
        (result) => { this.Statuses = result ;},
        (error) => { console.log(error) ;}
      );
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
    updateCandidature(id:any,candidature:any)
    {
      candidature.statusId=candidature.statusId-0;
      candidature.candidate.other={}
      //console.log(candidature)
      this.myservice.updateCandidature(id,candidature).subscribe(
        (data)=>{
          alert("modification avec succes");
          window.location.reload();
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
