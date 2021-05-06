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
  constructor(private router : Router) { }

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

}
