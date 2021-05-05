import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-candidat-profile',
  templateUrl: './admin-candidat-profile.component.html',
  styleUrls: ['../parametre/parametre.component.css','./admin-candidat-profile.component.css']
})
export class AdminCandidatProfileComponent implements OnInit {
  public candidat: any[] = []
  constructor(public http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/'); 
    else 
    {//get profile
     /* this.http.get<any>(`https://localhost:44338/Candidates/${id}`)
      .subscribe(
        (result) => { this.candidat = result },
        (error) => { console.log(error) }
      )*/
    }
  }

}
