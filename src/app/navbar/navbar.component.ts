import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public test : boolean = false
  public role : boolean 
  constructor(private router : Router) { }

  ngOnInit(): void {
    if (localStorage.length!=0)
    {
      this.test=true
      if (localStorage.getItem("role")=="admin")
      {
        this.role = true
      }
      else {
        this.role = false
      }
    }

    
  }


  
  logout()
  {
    localStorage.removeItem("mytoken");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
    window.location.reload()
  }

}
