import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['./mes-candidatures.component.css',]
})
export class MesCandidaturesComponent implements OnInit {
  public mesCandidatures: any[] = []
  public mesCandidatureSponts: any[] = []
  public id:any={}
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public Contrats: any[] = []
  public Diplomes: any[] = []
  t:any={};




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
    this.http.get<any>("https://localhost:44338/Countries")
      .subscribe(
        (result) => { this.Countries = result },
        (error) => { console.log(error) }
      )
      //get Diplomes
      this.http.get<any>("https://localhost:44338/Diplomas")
      .subscribe(
        (result) => { this.Diplomes = result },
        (error) => { console.log(error) }
      )
      //get Domaines
      this.http.get<any>("https://localhost:44338/Domains")
      .subscribe(
        (result) => { this.Domaines = result },
        (error) => { console.log(error) }
      )
      //get Experiences
      this.http.get<any>("https://localhost:44338/Experiences")
      .subscribe(
        (result) => { this.Experiences = result },
        (error) => { console.log(error) }
      )
      //get contrattype
      this.http.get<any>("https://localhost:44338/ContratTypes")
      .subscribe(
        (result) => { this.Contrats = result },
        (error) => { console.log(error) }
      )
  }

  test(objet:any)
  {
this.t=objet;
  }

}