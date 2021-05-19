import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddCandidateService } from './add-candidate.service';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['../profile/profile.component.css'],
  providers: [DatePipe]
})
export class AddCandidateComponent implements OnInit {
  public DrivingLicences: any[] = []
  public Countries: any[] = []
  public Salaires: any[] = []
  public firstName: any
  public lastName: any
  public email: any
  candidate:any={};
  public response1: {dbPath: ''};
  public response2: {dbPath: ''};
  public addForm: FormGroup
  constructor(private formBuilder: FormBuilder, private myservice: AddCandidateService, public http: HttpClient, private router : Router, private datePipe: DatePipe, private toastr: ToastrService) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.addForm = new FormGroup({
      birthdayDate: new FormControl("",[
        Validators.required
      ]),
      phone: new FormControl("",[
        Validators.required
      ]),
      drivingLicenceId: new FormControl("",[
        Validators.required
      ]),
      salaryWishId: new FormControl("",[
        Validators.required
      ]),
      gender: new FormControl("",[
        Validators.required
      ]),
      countryId: new FormControl("",[
        Validators.required
      ]),
      street: new FormControl("",[
        Validators.required
      ]),
      city: new FormControl("",[
        Validators.required
      ]),
      zipCode: new FormControl("",[
        Validators.required
      ]),
      facebookUrl: new FormControl("",[
        Validators.pattern(reg)
      ]),
      linkedinUrl: new FormControl("",[
        Validators.pattern(reg)
      ])
    })
   }
   get birthdayDate() {return this.addForm.get('birthdayDate')}
   get phone() {return this.addForm.get('phone')}
   get street() {return this.addForm.get('street')}
   get city() {return this.addForm.get('city')}
   get zipCode() {return this.addForm.get('zipCode')}
   get facebookUrl() {return this.addForm.get('facebookUrl')}
   get salaryWishId() {return this.addForm.get('salaryWishId')}
   get countryId() {return this.addForm.get('countryId')}
   get drivingLicenceId() {return this.addForm.get('drivingLicenceId')}
   get gender() {return this.addForm.get('gender')}
   get linkedinUrl() {return this.addForm.get('linkedinUrl')}

 
  
  ngOnInit(): void {
    let userid = localStorage.getItem("id")
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/');
    else 
    {
      //get user
    this.http.get<any>("https://localhost:44338/Users/"+userid)
    .subscribe(
      (result) => { this.firstName = result.firstName;
                    this.lastName = result.lastName;
                    this.email = result.email},
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
      //get Slaires
      this.http.get<any>("https://localhost:44338/SalaryWishes")
      .subscribe(
        (result) => { this.Salaires = result },
        (error) => { console.log(error) }
      )
  }}
  addCandidate(){
    this.candidate.userId=localStorage.getItem("id");
    this.candidate.userId=this.candidate.userId-0;
    this.candidate.zipCode=this.candidate.zipCode-0;
    this.candidate.countryId=this.candidate.countryId-0;
    this.candidate.drivingLicenceId=this.candidate.drivingLicenceId-0;
    this.candidate.salaryWishId=this.candidate.salaryWishId-0;
    this.candidate.picturePath=this.response1.dbPath;
    this.candidate.cvPath=this.response2.dbPath;
    this.candidate.birthdayDate = this.datePipe.transform(this.candidate.birthdayDate, 'yyyy-MM-dd');
    var reponse=this.myservice.addCandidate(this.candidate).subscribe(
      (data)=>{
        this.toastr.success("ajout succées");
        window.location.reload();
        return data;
      },
      (err)=>{
        this.toastr.error("erreur");
        window.location.reload();
        console.log(err);
      }
    );
    console.log(reponse);
  }  
      public uploadPictureFinished = (event:any) => {
        this.response1 = event;
      }

      public uploadCvFinished = (event:any) => {
        this.response2 = event;
      }
  
}
