import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class OffresComponent implements OnInit {
  public offres: any[] = []
  public test: boolean
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.length!=0)
    this.test=true;
    else 
    this.test=false;
    //get offres
    this.http.get<any>("https://localhost:44338/JobOffers")
      .subscribe(
        (result) => { this.offres = result },
        (error) => { console.log(error) }
      )
  }

}
