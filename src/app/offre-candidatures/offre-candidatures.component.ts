import { Component, Input, OnInit } from '@angular/core';
import { OffreCandidaturesService } from './offre-candidatures.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offre-candidatures',
  templateUrl: './offre-candidatures.component.html',
  styleUrls: ['./offre-candidatures.component.css']
})
export class OffreCandidaturesComponent implements OnInit {
  t:any={};
  id:any;
  idOffre:any={};
  Statuses:any[];
  candidatures: any=[];
  JobOfferCandidatures: any=[];
  constructor(private myservice: OffreCandidaturesService, public http: HttpClient, private router : Router, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/');
    else{ 
    this.getallJobOfferCandidatures(this.id);
    this.http.get<any>("https://localhost:44338/Status")
      .subscribe(
        (result) => { this.Statuses = result },
        (error) => { console.log(error) }
      )
    }
  }
  getallJobOfferCandidatures(id:any)
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
    passe(id:any)
    {
      this.idOffre=id;
      //console.log(this.idOffre);
    }

    
}