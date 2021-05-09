import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class OffresComponent implements OnInit {
  public offres: any[] = []
  public mycandidature:any={}
  public candidate:any={}
  public test: boolean
  public testcandidat: boolean =false
  public id:any={}
  public response: {dbPath: ''};
  constructor(public http: HttpClient,private datePipe: DatePipe,private router : Router) { }

  ngOnInit(): void {
    this.http.get<any>("https://localhost:44338/GetCandidate/"+this.id)
      .subscribe(
        (result) => { this.candidate = result
          this.testcandidat=true },
        (error) => { console.log(error) }
      )

    if (this.testcandidat)
    {this.id = localStorage.getItem("id")
    if (localStorage.length!=0)
    {
    this.test=true;
    this.id = localStorage.getItem("id")
    }
    else 
    this.test=false;
    //get offres
    this.http.get<any>("https://localhost:44338/JobOffers")
      .subscribe(
        (result) => { this.offres = result },
        (error) => { console.log(error) }
      )
  }
  else 
  this.router.navigateByUrl('/profile');
     
  }
  addOffre(offre:any){
    if (localStorage.length!=0)
    {this.mycandidature.jobOfferId=offre.id;
    this.mycandidature.candidateId=this.candidate.id;
    this.mycandidature.statusId=1;
    //à corriger
    this.mycandidature.coverLetterPath=this.response.dbPath;
    var date = new Date();
    this.mycandidature.candidatureDate= this.datePipe.transform(date,"dd-MM-yyyy");
    console.log(this.mycandidature);
    this.http.post<any>("https://localhost:44338/Candidatures",this.mycandidature)
    .subscribe(
      (result) => {
        alert("Ajouté avec succès");
        return result;
      },
      (error) => { console.log(error) 
        alert("Erreur");
      }
    )
  }
  else 
  this.router.navigateByUrl('/login');
  }

  public uploadCoverLettreFinished = (event:any) => {
    this.response = event;
  }

}
