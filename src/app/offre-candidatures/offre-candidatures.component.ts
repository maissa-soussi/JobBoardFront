import { Component, Input, OnInit } from '@angular/core';
import { OffreCandidaturesService } from './offre-candidatures.service';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { AdminOffresComponent } from '../admin-offres/admin-offres.component';
=======
import { Router } from '@angular/router';
>>>>>>> 1e3b9cf9efa3b6bf2475946a7af9a105d9e80145

@Component({
  selector: 'app-offre-candidatures',
  templateUrl: './offre-candidatures.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class OffreCandidaturesComponent implements OnInit {
  idOffre:any=1;
  t:any={};
  id:any;
  candidatures: any=[];
  JobOfferCandidatures: any=[];
<<<<<<< HEAD
  constructor(private myservice: OffreCandidaturesService, public http: HttpClient,private com:AdminOffresComponent) { }

  ngOnInit(): void {
    console.log(this.idOffre)
    this.getallJobOfferCandidatures(this.idOffre);
=======
  constructor(private myservice: OffreCandidaturesService, public http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/');
    else 
    this.getallJobOfferCandidatures(1);
>>>>>>> 1e3b9cf9efa3b6bf2475946a7af9a105d9e80145
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
