import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from './candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class CandidatComponent implements OnInit {

  candidats: any=[];

  constructor(private myservice: CandidatService, private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/');
    else
    this.getallcandidats();
  }
  getallcandidats()
  {
    this.myservice.getcandidats().subscribe(
      (data: any)=>{
        this.candidats=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.candidats);
    }

    candidatDelete(id:number){
      if (confirm('Voulez vous supprimé ce candidat?'))
      {
      this.myservice.deleteCandidat(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }

}
