import { Component, OnInit } from '@angular/core';
import { AdminOffresService } from './admin-offres.service';

@Component({
  selector: 'app-admin-offres',
  templateUrl: './admin-offres.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class AdminOffresComponent implements OnInit {
  offres: any=[];
  constructor(private myservice: AdminOffresService) { }

  ngOnInit(): void {
    this.getalloffres();
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
