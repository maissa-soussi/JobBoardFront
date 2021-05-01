import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature-spontannee',
  templateUrl: './candidature-spontannee.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class CandidatureSpontanneeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/');
  }

}
