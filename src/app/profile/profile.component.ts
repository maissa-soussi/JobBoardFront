import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public languages: any[] = []
  public languageLevels: any[] = []
  public DrivingLicences: any[] = []
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public StudiesLevels: any[] = []
  public Contrats: any[] = []
  public Salaires: any[] = []
  public ID : number
  public test : boolean
  constructor(public http: HttpClient, private router : Router) { }
  
  ngOnInit(): void {
    this.test=false
    let id = localStorage.getItem("id")
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/');
    else 
    {
      // get candidate 
      this.http.get<any>("https://localhost:44338/Getcandidate/"+id)
      .subscribe(
        (result) => { 
          this.test = result.id == 0;     
        },
        (error) => { console.log(error) }
      )
      

      console.log("test : ",this.test)
    //get languages
    this.http.get<any>("https://localhost:44338/Languages")
      .subscribe(
        (result) => { this.languages = result },
        (error) => { console.log(error) }
      )
      //get level languages
      this.http.get<any>("https://localhost:44338/LanguageLevels")
      .subscribe(
        (result) => { this.languageLevels = result },
        (error) => { console.log(error) }
      )
      //get DrivingLicence
      this.http.get<any>("https://localhost:44338/DrivingLicences")
      .subscribe(
        (result) => { this.DrivingLicences = result },
        (error) => { console.log(error) }
      )
      //get Countries
      this.http.get<any>("https://localhost:44338/Countries")
      .subscribe(
        (result) => { this.Countries = result },
        (error) => { console.log(error) }
      )
      //get Domaines
      this.http.get<any>("https://localhost:44338/Domains")
      .subscribe(
        (result) => { this.Domaines = result },
        (error) => { console.log(error) }
      )
      //get StudiesLevels
      this.http.get<any>("https://localhost:44338/EducationLevels")
      .subscribe(
        (result) => { this.StudiesLevels = result },
        (error) => { console.log(error) }
      )
      //get Experiences
      this.http.get<any>("https://localhost:44338/Experiences")
      .subscribe(
        (result) => { this.Experiences = result },
        (error) => { console.log(error) }
      )
      //get Experiences
      this.http.get<any>("https://localhost:44338/ContratTypes")
      .subscribe(
        (result) => { this.Contrats = result },
        (error) => { console.log(error) }
      )
      //get Slaires
      this.http.get<any>("https://localhost:44338/SalaryWishes")
      .subscribe(
        (result) => { this.Salaires = result },
        (error) => { console.log(error) }
      )
  }}
 
}