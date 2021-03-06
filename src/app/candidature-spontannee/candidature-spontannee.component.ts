import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private router : Router,public http: HttpClient,private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    
    let id=localStorage.getItem("id")
    this.http.get<any>("https://localhost:44338/GetCandidate/"+id)
      .subscribe(
        (result) => { this.candidate = result
          this.testcandidat=result.id != 0
        console.log(this.testcandidat) },
        (error) => { console.log(error) }
      )
    
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
        this.toastr.success("Ajouté avec succès");
        return result;
      },
      (error) => { console.log(error) 
        this.toastr.error("Erreur");
      }
    )
  }


}
