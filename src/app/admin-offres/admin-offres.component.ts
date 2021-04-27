import { Component, OnInit } from '@angular/core';
import { AdminOffresService } from './admin-offres.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-offres',
  templateUrl: './admin-offres.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class AdminOffresComponent implements OnInit {
  offres: any=[];
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public Contrats: any[] = []
  public Diplomes: any[] = []
  constructor(private myservice: AdminOffresService, public http: HttpClient) { }

  ngOnInit(): void {
    this.getalloffres();
      //get Countries
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
  getalloffres()
  {
    this.myservice.getoffres().subscribe(
      (data: any)=>{
        this.offres=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.offres);
    }

    offreDelete(id:number){
      if (confirm('Are you sure to delete this joboffer?'))
      {
      this.myservice.deleteOffre(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }


}
