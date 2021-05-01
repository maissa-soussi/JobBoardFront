import { Component, OnInit } from '@angular/core';
import { OffreCandidaturesService } from './offre-candidatures.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-candidatures',
  templateUrl: './offre-candidatures.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class OffreCandidaturesComponent implements OnInit {
  t:any={};
  candidatures: any=[];
  JobOfferCandidatures: any=[];
  constructor(private myservice: OffreCandidaturesService, public http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/');
    else 
    this.getallJobOfferCandidatures(1);
  }
  getallJobOfferCandidatures(id:number)
  {
    this.myservice.getJobOfferCandidatures(id).subscribe(
      (data: any)=>{
        this.JobOfferCandidatures=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.candidatures);
    }
    onDelete(id:number){
      if (confirm('Are you sure to delete this candidature?'))
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
