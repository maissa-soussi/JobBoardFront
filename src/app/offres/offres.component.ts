import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';



@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class OffresComponent implements OnInit {
  public offres: any[] = []
  public mycandidature:any={}
  public test: boolean
  public id:any={}
  constructor(public http: HttpClient,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("id")
    if (localStorage.length!=0)
    this.test=true;
    else 
    this.test=false;
    //get offres
    this.http.get<any>("https://localhost:44338/JobOffers")
      .subscribe(
        (result) => { this.offres = result },
        (error) => { console.log(error) }
      )
  }
  addOffre(offre:any){
    this.mycandidature.jobOfferId=offre.id;
    this.mycandidature.candidateId=this.id-0;
    this.mycandidature.statusId=1;
    //à corriger
    this.mycandidature.coverLetterPath="à corriger"
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

}
