import { Component, OnInit } from '@angular/core';
import { AdminCandidaturesService } from './admin-candidatures.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-candidatures',
  templateUrl: './admin-candidatures.component.html',
  styleUrls: ['./admin-candidatures.component.css']
})
export class AdminCandidaturesComponent implements OnInit {
  candidatures: any=[];
  t:any={};
  public Statuses: any[] = []
  constructor(private myservice: AdminCandidaturesService, public http: HttpClient, private router : Router) { }


  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/'); 
    else 
    {this.getallcandidatures();
    this.http.get<any>("https://localhost:44338/Status")
      .subscribe(
        (result) => { this.Statuses = result },
        (error) => { console.log(error) }
      )
    }
  }
  getallcandidatures()
  {
    this.myservice.getcandidatures().subscribe(
      (data: any)=>{
        this.candidatures=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.candidatures);
    }
    onDelete(id:number){
      if (confirm('Voulez vous supprimer cette candidature?'))
      {
      this.myservice.deleteCandidature(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }
    updateCandidature(id:any,candidature:any)
    {
      candidature.statusId=candidature.statusId-0;
      console.log(candidature)
      this.myservice.updateCandidature(id,candidature).subscribe(
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
      console.log(objet)
 this.t=objet;
 console.log(this.t)
    }

}