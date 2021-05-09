import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature-spontannee',
  templateUrl: './candidature-spontannee.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class CandidatureSpontanneeComponent implements OnInit {
  public response2: {dbPath: ''};
  public mycandidature:any={}
  public candidate:any={}
  public testcandidat: boolean =false
  public id:any={}
  constructor(private router : Router,public http: HttpClient,private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.http.get<any>("https://localhost:44338/GetCandidate/"+this.id)
      .subscribe(
        (result) => { this.candidate = result
          this.testcandidat=true },
        (error) => { console.log(error) }
      )
      if (this.testcandidat)
      {
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/');
    this.id = localStorage.getItem("id")
    this.http.get<any>("https://localhost:44338/GetCandidate/"+this.id)
    .subscribe(
      (result) => { this.candidate = result
      console.log(this.candidate) },
      (error) => { console.log(error) }
    )
  }
  else 
  this.router.navigateByUrl('/profile');
}
  public uploadCvFinished = (event:any) => {
    this.response2 = event;
  }
  addCandidature(){
    this.mycandidature.candidateId=this.candidate.id;
    this.mycandidature.statusId=1;
    this.mycandidature.coverLetterPath=this.response2.dbPath;
    this.mycandidature.candidatureDate= this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.mycandidature);
    this.http.post<any>("https://localhost:44338/CandidatureSponts",this.mycandidature)
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
