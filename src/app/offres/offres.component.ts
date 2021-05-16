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
  public testrole: boolean
  public testcandidat: boolean =false
  public id:any={}
  public response: {dbPath: ''};
  dtOptions: DataTables.Settings = {};

  constructor(public http: HttpClient,private datePipe: DatePipe,private router : Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    //get offres
    this.http.get<any>("https://localhost:44338/JobOffers")
      .subscribe(
        (result) => { this.offres = result },
        (error) => { console.log(error) }
      )
    if (localStorage.length!=0)
    {
      this.test=true
      this.id=localStorage.getItem("id")
    this.http.get<any>("https://localhost:44338/GetCandidate/"+this.id)
      .subscribe(
        (result) => { this.candidate = result
          this.testcandidat=result.id != 0
        console.log(this.testcandidat) },
        (error) => { console.log(error) }
      )
          if (localStorage.getItem("role")=="candidat")
          this.testrole=true

}
  else 
  { 
    this.test=false;
    
      this.router.navigateByUrl('/offres');
      }
  }

  addOffre(offre:any){
    this.mycandidature.jobOfferId=offre.id;
    this.mycandidature.candidateId=this.candidate.id;
    this.mycandidature.statusId=1;
    //à corriger
    this.mycandidature.coverLetterPath=this.response.dbPath;
    var date = new Date();
    this.mycandidature.candidatureDate= this.datePipe.transform(date,"yyyy-MM-dd");
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

  public uploadCoverLettreFinished = (event:any) => {
    this.response = event;
  }

}
