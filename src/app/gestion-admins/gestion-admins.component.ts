import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-admins',
  templateUrl: './gestion-admins.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class GestionAdminsComponent implements OnInit {
  public admins: any[] = []
  constructor(public http: HttpClient) { }
  myadmin:any={};
  ngOnInit(): void {
     //get admins
     this.http.get<any>("https://localhost:44338/Users")
     .subscribe(
       (result) => { this.admins = result },
       (error) => { console.log(error) }
     )
  }

  //delete admin
  adminDelete(id:number){
    if (confirm('Voulez vous supprimé cet administrateur ?'))
      {
        this.http.delete(`https://localhost:44338/Users/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  //add admin
  addAdmin(){
    this.myadmin.role ="admin";
    this.http.post("https://localhost:44338/Users",this.myadmin).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Admin existe deja");
        console.log(err);
      }
    );
    window.location.reload()
  }

}
