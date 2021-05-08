import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class MesCandidaturesComponent implements OnInit {
  public mesCandidatures: any[] = []
  public mesCandidatureSponts: any[] = []
  public id:any={}



  constructor(private router : Router,public http: HttpClient) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/'); 

    this.id = localStorage.getItem("id")
    this.http.get<any>("https://localhost:44338/MyCandidatures/"+this.id)
    .subscribe(
      (result) => { this.mesCandidatures = result },
      (error) => { console.log(error) }
    )
    this.http.get<any>("https://localhost:44338/MyCandidatureSponts/"+this.id)
    .subscribe(
      (result) => { this.mesCandidatureSponts = result },
      (error) => { console.log(error) }
    )
  }

}