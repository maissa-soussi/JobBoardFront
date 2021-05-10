import { Component, Input, OnInit } from '@angular/core';
import { AdminOffresService } from './admin-offres.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-offres',
  templateUrl: './admin-offres.component.html',
  styleUrls: ['../parametre/parametre.component.css','./admin-offres.component.css'],
  providers: [DatePipe]
})
export class AdminOffresComponent implements OnInit {
  //@Input()  idOffre:any=1;
  idOffre:any;
  offres: any=[];
  myoffre:any={};
  myoffre1:any={};
  myid:any;
 
  t:any={};
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public Contrats: any[] = []
  public Diplomes: any[] = []
  constructor(private myservice: AdminOffresService, public http: HttpClient, private router : Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/'); 
    else 
    {
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
  }}
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
    addOffre(){
      this.myoffre.diplomaId=this.myoffre.diplomaId-0;
      this.myoffre.countryId=this.myoffre.countryId-0;
      this.myoffre.domainId=this.myoffre.domainId-0;
      this.myoffre.experienceId=this.myoffre.experienceId-0;
      this.myoffre.contratTypeId=this.myoffre.contratTypeId-0;
      this.myoffre.publicationDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.myoffre.expirationDate = this.datePipe.transform(this.myoffre.expirationDate, 'yyyy-MM-dd');
      var reponse=this.myservice.addOffre(this.myoffre).subscribe(
        (data)=>{
          alert("ajout succées");
          window.location.reload();
          return data;
        },
        (err)=>{
          alert("erreur");
          console.log(err);
        }
      );
      console.log(reponse);
      this.myoffre={};
    }  
    updateOffre(id:any,offre:any)
    {
      offre.diplomaId=offre.diplomaId-0;
      offre.countryId=offre.countryId-0;
      offre.domainId=offre.domainId-0;
      offre.experienceId=offre.experienceId-0;
      offre.contratTypeId=offre.contratTypeId-0;
      offre.expirationDate = this.datePipe.transform(offre.expirationDate, 'yyyy-MM-dd');
      this.myservice.updateOffre(id,offre).subscribe(
        (data)=>{
          alert("modification avec succes");
          window.location.reload();
          return data;
        },
        (err)=>{
          alert("erreur");
          console.log(err);
        }
      );
    }

    test(objet:any)
    {
 this.t=objet;
    }
    
    passe(id:any)
    {
      this.idOffre=id;
      console.log(this.idOffre);
    }


}
