import { Component, Input, OnInit } from '@angular/core';
import { AdminOffresService } from './admin-offres.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"

@Component({
  selector: 'app-admin-offres',
  templateUrl: './admin-offres.component.html',
  styleUrls: ['../parametre/parametre.component.css','./admin-offres.component.css'],
  providers: [DatePipe]
})
export class AdminOffresComponent implements OnInit {
  public ajoutOfferForm: FormGroup
  idOffre:any;
  offres: any=[];
  myoffre:any={};
  myoffre1:any={};
  myid:any;
  jobOfferCandidatures:any[];

 
  t:any={};
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public Contrats: any[] = []
  public Diplomes: any[] = []
  public addForm: FormGroup
  constructor(private myservice: AdminOffresService, public http: HttpClient, private router : Router, private datePipe: DatePipe, private toastr: ToastrService) { 
    this.addForm = new FormGroup({
      reference: new FormControl("",[
        Validators.required
      ]),
      name: new FormControl("",[
        Validators.required
      ]),
      domainId: new FormControl("",[
        Validators.required
      ]),
      experienceId: new FormControl("",[
        Validators.required
      ]),
      diplomaId: new FormControl("",[
        Validators.required
      ]),
      countryId: new FormControl("",[
        Validators.required
      ]),
      contratTypeId: new FormControl("",[
        Validators.required
      ]),
      minSalary: new FormControl("",[
        Validators.required
      ]),
      maxSalary: new FormControl("",[
        Validators.required
      ]),
      description: new FormControl("",[
        Validators.required
      ]),
      expirationDate: new FormControl("",[
        Validators.required
      ]),
    })
  }
  get reference() {return this.addForm.get('reference')}
  get name() {return this.addForm.get('name')}
  get domainId() {return this.addForm.get('domainId')}
  get experienceId() {return this.addForm.get('experienceId')}
  get diplomaId() {return this.addForm.get('diplomaId')}
  get countryId() {return this.addForm.get('countryId')}
  get contratTypeId() {return this.addForm.get('contratTypeId')}
  get minSalary() {return this.addForm.get('minSalary')}
  get maxSalary() {return this.addForm.get('maxSalary')}
  get description() {return this.addForm.get('description')}
  get expirationDate() {return this.addForm.get('expirationDate')}

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
  }
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
        this.http.get<any>("https://localhost:44338/joboffercandidatures/"+id)
        .subscribe(
          (result) => { this.jobOfferCandidatures = result
            console.log(this.jobOfferCandidatures)
            this.jobOfferCandidatures.forEach(element => {
              this.myservice.deleteCandidature(element.candidatureId)
              .subscribe(
                result =>{this.myservice.deleteOffre(id)
                  .subscribe(
                    err =>{console.log(err)}
                  );},
                err =>{console.log(err)}
              );          
            }); },
          (error) => { console.log(error) }
        )
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
          window.location.reload();
          this.toastr.success("offre ajouté avec succes");
          return data;
        },
        (err)=>{
          this.toastr.error("reference existe déja!");
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
 this.t=objet;
    }
    
    passe(id:any)
    {
      this.idOffre=id;
      console.log(this.idOffre);
    }


}
