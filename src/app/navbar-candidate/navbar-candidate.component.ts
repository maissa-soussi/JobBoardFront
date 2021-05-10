import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-candidate',
  templateUrl: './navbar-candidate.component.html',
  styleUrls: ['./navbar-candidate.component.css']
})
export class NavbarCandidateComponent implements OnInit {
  public nom = localStorage.getItem("nom");
  public prenom = localStorage.getItem("prenom");
  public candidate:any={}
  public testc: boolean =false
  constructor(private router : Router, public http: HttpClient) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("mytoken");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
    this.router.navigateByUrl('/');
  }

 /* testcandidat()
  {
    let id = localStorage.getItem("id")
    this.http.get<any>("https://localhost:44338/GetCandidate/"+id)
      .subscribe(
        (result) => { this.candidate = result
          this.testc=true },
        (error) => { console.log(error) }
      )
      console.log(this.testc)
    if (this.testc == true)
    this.router.navigateByUrl('/candidature-spontannee');
    else 
    this.router.navigateByUrl('/profile');

    
  }*/

}
