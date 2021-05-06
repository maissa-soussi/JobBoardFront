import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class AdminNavbarComponent implements OnInit {
  
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
