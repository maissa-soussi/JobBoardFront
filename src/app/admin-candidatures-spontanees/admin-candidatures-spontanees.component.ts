import { Component, OnInit } from '@angular/core';
import { AdminCandidaturesSpontaneesService } from './admin-candidatures-spontanees.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-candidatures-spontanees',
  templateUrl: './admin-candidatures-spontanees.component.html',
  styleUrls: ['../parametre/parametre.component.css','../admin-candidatures/admin-candidatures.component.css']
})
export class AdminCandidaturesSpontaneesComponent implements OnInit {
  CandidaturesSpontanees: any=[];
  t:any={};
  public Statuses: any[] = []
  constructor(private myservice: AdminCandidaturesSpontaneesService, public http: HttpClient, private router : Router, private toastr: ToastrService) { }


  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/'); 
    else 
    {this.getallCandidaturesSpontanees();
    this.http.get<any>("https://localhost:44338/Status")
      .subscribe(
        (result) => { this.Statuses = result },
        (error) => { console.log(error) }
      )
    }
  }
  getallCandidaturesSpontanees()
  {
    this.myservice.getCandidaturesSpontanees().subscribe(
      (data: any)=>{
        this.CandidaturesSpontanees=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.CandidaturesSpontanees);
    }
    onDelete(id:number){
      if (confirm('Voulez vous supprimer cette candidature?'))
      {
      this.myservice.deleteCandidatureSpontanee(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }
    updateCandidatureSpontanee(id:any,CandidatureSpontanee:any)
    {
        CandidatureSpontanee.statusId=CandidatureSpontanee.statusId-0;
        
        console.log(CandidatureSpontanee);
      this.myservice.updateCandidatureSpontanee(id,CandidatureSpontanee).subscribe(
        (data)=>{
          this.toastr.success("modification avec succes");
          window.location.reload();
          return data;
        },
        (err)=>{
          this.toastr.error("erreur");
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