import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class MesCandidaturesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/'); 
  }

}