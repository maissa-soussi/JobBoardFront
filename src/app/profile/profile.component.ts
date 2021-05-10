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
          
  }}
 
}