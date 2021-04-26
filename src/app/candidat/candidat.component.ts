import { Component, OnInit } from '@angular/core';
import { CandidatService } from './candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['../parametre/parametre.component.css']
})
export class CandidatComponent implements OnInit {

  candidats: any=[];

  constructor(private myservice: CandidatService) { }

  ngOnInit(): void {
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
      if (confirm('Are you sure to delete this candidate?'))
      {
      this.myservice.deleteCandidat(id)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
    }

}
