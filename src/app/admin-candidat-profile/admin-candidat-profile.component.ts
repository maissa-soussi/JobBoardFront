import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-candidat-profile',
  templateUrl: './admin-candidat-profile.component.html',
  styleUrls: ['../parametre/parametre.component.css','./admin-candidat-profile.component.css']
})
export class AdminCandidatProfileComponent implements OnInit {
  public candidat: any={}
  id:any;
  public languages: any[] = []
  public diplomas: any[] = []
  public experiences: any[] = []
  constructor(public http: HttpClient, private router : Router, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/'); 
    else 
    {//get profile      
      this.http.get<any>(`https://localhost:44338/Candidates/${this.id}`)
      .subscribe(
        (result) => { this.candidat = result;},
        (error) => { console.log(error) }
      )

      this.http.get<any>(`https://localhost:44338/CandidateLanguages/${this.id}`)
      .subscribe(
        (result) => { this.languages = result;},
        (error) => { console.log(error) }
      )

      this.http.get<any>(`https://localhost:44338/CandidateDiplomas/${this.id}`)
      .subscribe(
        (result) => { this.diplomas = result;},
        (error) => { console.log(error) }
      )

      this.http.get<any>(`https://localhost:44338/CandidateExperiences/${this.id}`)
      .subscribe(
        (result) => { this.experiences = result;},
        (error) => { console.log(error) }
      )
    }
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44304/${serverPath}`;
  }

  public createCvPath = (serverPath: string) => {
    return `https://localhost:44304/${serverPath}`;
  }

}
