import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  public languages: any[] = []
  public languageLevels: any[] = []
  public DrivingLicences: any[] = []
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public StudiesLevels: any[] = []
  public Contrats: any[] = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    //get languages
    this.http.get<any>("https://localhost:44338/Languages")
      .subscribe(
        (result) => { this.languages = result },
        (error) => { console.log(error) }
      )
      //get level languages
      this.http.get<any>("https://localhost:44338/LanguageLevels")
      .subscribe(
        (result) => { this.languageLevels = result },
        (error) => { console.log(error) }
      )
      //get DrivingLicence
      this.http.get<any>("https://localhost:44338/DrivingLicences")
      .subscribe(
        (result) => { this.DrivingLicences = result },
        (error) => { console.log(error) }
      )
      //get Countries
      this.http.get<any>("https://localhost:44338/Countries")
      .subscribe(
        (result) => { this.Countries = result },
        (error) => { console.log(error) }
      )
      //get Domaines
      this.http.get<any>("https://localhost:44338/Domains")
      .subscribe(
        (result) => { this.Domaines = result },
        (error) => { console.log(error) }
      )
      //get Domaines
      //get Experiences
      this.http.get<any>("https://localhost:44338/Experiences")
      .subscribe(
        (result) => { this.Experiences = result },
        (error) => { console.log(error) }
      )
      //get Experiences
      this.http.get<any>("https://localhost:44338/ContratTypes")
      .subscribe(
        (result) => { this.Contrats = result },
        (error) => { console.log(error) }
      )
  }

  languageDelete(id:number){
    if (confirm('Voulez vous supprimé cette langue ?'))
      {
        this.http.delete(`https://localhost:44338/Languages/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  languageLevelDelete(id:number){
    if (confirm('Voulez vous supprimé ce niveau de langue ?'))
      {
        this.http.delete(`https://localhost:44338/LanguageLevels/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  drivingLicenceDelete(id:number){
    if (confirm('Voulez vous supprimé ce type de permis ?'))
      {
        this.http.delete(`https://localhost:44338/DrivingLicences/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  countryDelete(id:number){
    if (confirm('Voulez vous supprimé ce pays ?'))
      {
        this.http.delete(`https://localhost:44338/Countries/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  domaineDelete(id:number){
    if (confirm('Voulez vous supprimé ce domaine ?'))
      {
        this.http.delete(`https://localhost:44338/Domains/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  experienceDelete(id:number){
    if (confirm('Voulez vous supprimé cette expérience ?'))
      {
        this.http.delete(`https://localhost:44338/Experiences/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }
  contratDelete(id:number){
    if (confirm('Voulez vous supprimé ce type de contrat ?'))
      {
        this.http.delete(`https://localhost:44338/ContratTypes/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

}
