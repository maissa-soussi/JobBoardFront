import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UpdateCandidateService } from './update-candidate.service';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class UpdateCandidateComponent implements OnInit {
  public Languages: any[] = []
  public languages: any[] = []
  public languageLevels: any[] = []
  public DrivingLicences: any[] = []
  public Countries: any[] = []
  public Domaines: any[] = []
  public Diplomas: any[] = []
  public diplomas: any[] = []
  public Experiences: any[] = []
  public experiences: any[] = []
  public StudiesLevels: any[] = []
  public Contrats: any[] = []
  public Salaires: any[] = []
  public firstName: any
  public lastName: any
  public email: any
  candidate:any={};
  candidateLanguage:any={};
  candidateExperience:any={};
  candidateDiploma:any={};
  public response1: {dbPath: ''};
  public response2: {dbPath: ''};
  public infoForm: FormGroup
  public expForm: FormGroup
  public educationForm: FormGroup
  public langueForm: FormGroup
  constructor(private formBuilder: FormBuilder, private myservice: UpdateCandidateService, public http: HttpClient, private router : Router) { 
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.infoForm = new FormGroup({
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

    this.langueForm = new FormGroup({
      languageId: new FormControl("",[
        Validators.required
      ]),
      languageLevelId: new FormControl("",[
        Validators.required
      ])
      
    })

    this.expForm = new FormGroup({
      companyName: new FormControl("",[
        Validators.required
      ]),
      profession: new FormControl("",[
        Validators.required
      ]),
      domainId: new FormControl("",[
        Validators.required
      ]),
      experienceId: new FormControl("",[
        Validators.required
      ]),
      startDate: new FormControl("",[
        Validators.required
      ]),
      endDate: new FormControl("",[
        Validators.required
      ])
      
    })


    this.educationForm = new FormGroup({
      university: new FormControl("",[
        Validators.required
      ]),
      educationLevelId: new FormControl("",[
        Validators.required
      ]),
      diploma: new FormControl("",[
        Validators.required
      ]),
      domainId: new FormControl("",[
        Validators.required
      ]),
      date: new FormControl("",[
        Validators.required
      ])
      
    })



  }

  ngOnInit(): void {
    let userid = localStorage.getItem("id")
    let role = localStorage.getItem("role")
    if (role =="admin")
    this.router.navigateByUrl('/');
    else 
    {
    //get languages
    this.http.get<any>("https://localhost:44338/Languages")
      .subscribe(
        (result) => { this.Languages = result },
        (error) => { console.log(error) }
      )
      //get user
    this.http.get<any>("https://localhost:44338/Users/"+userid)
    .subscribe(
      (result) => { this.firstName = result.firstName;
                    this.lastName = result.lastName;
                    this.email = result.email},
      (error) => { console.log(error) }
    )
    //get candidateId
    this.http.get<any>("https://localhost:44338/GetCandidate/"+localStorage.getItem("id"))
    .subscribe(
      (result) => { this.candidateLanguage.candidateId = result.id;
                    this.candidateExperience.candidateId = result.id;
                    this.candidateDiploma.candidateId = result.id;
                    this.getalldiplomas(result.id);
                    this.getalllanguages(result.id);
                    this.getallexperiences(result.id);
                    this.getcandidate(result.id);
                  },
      (error) => { console.log(error) }
    )
      //get level languages
      this.http.get<any>("https://localhost:44338/LanguageLevels")
      .subscribe(
        (result) => { this.languageLevels = result },
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
      //get Domaines
      this.http.get<any>("https://localhost:44338/Domains")
      .subscribe(
        (result) => { this.Domaines = result },
        (error) => { console.log(error) }
      )
      //get StudiesLevels
      this.http.get<any>("https://localhost:44338/EducationLevels")
      .subscribe(
        (result) => { this.StudiesLevels = result },
        (error) => { console.log(error) }
      )
      //get Experiences
      this.http.get<any>("https://localhost:44338/Experiences")
      .subscribe(
        (result) => { this.Experiences = result },
        (error) => { console.log(error) }
      )
      //get Experiences
      this.http.get<any>("https://localhost:44338/ContratTypes")
      .subscribe(
        (result) => { this.Contrats = result },
        (error) => { console.log(error) }
      )
      //get Slaires
      this.http.get<any>("https://localhost:44338/SalaryWishes")
      .subscribe(
        (result) => { this.Salaires = result },
        (error) => { console.log(error) }
      )
  }}
  addCandidateLanguage(){    
    this.candidateLanguage.candidateId=this.candidateLanguage.candidateId-0;
    this.candidateLanguage.languageId=this.candidateLanguage.languageId-0;
    this.candidateLanguage.languageLevelId=this.candidateLanguage.languageLevelId-0;
    var reponse=this.myservice.addCandidateLanguage(this.candidateLanguage).subscribe(
      (data)=>{
        alert("ajout succées");
        window.location.reload();
        return data;
      },
      (err)=>{
        alert("erreur");
        window.location.reload();
        console.log(err);
      }
    );
    console.log(reponse);
  }  

  addCandidateExperience(){  
    this.candidateExperience.candidateId=this.candidateExperience.candidateId-0;
    this.candidateExperience.experienceId=this.candidateExperience.experienceId-0;
    this.candidateExperience.domainId=this.candidateExperience.domainId-0;
    var reponse=this.myservice.addCandidateExperience(this.candidateExperience).subscribe(
      (data)=>{
        alert("ajout succées");
        window.location.reload();
        return data;
      },
      (err)=>{
        alert("erreur");
        window.location.reload();
        console.log(err);
      }
    );
    console.log(reponse);
  }  

  addCandidateDiploma(){   
    this.candidateDiploma.candidateId=this.candidateDiploma.candidateId-0;
    this.candidateDiploma.domainId=this.candidateDiploma.domainId-0;
    this.candidateDiploma.educationLevelId=this.candidateDiploma.educationLevelId-0;
    var reponse=this.myservice.addCandidateDiploma(this.candidateDiploma).subscribe(
      (data)=>{
        alert("ajout succées");
        window.location.reload();
        return data;
      },
      (err)=>{
        alert("erreur");
        window.location.reload();
        console.log(err);
      }
    );
    console.log(reponse);
  }  
  getalldiplomas(id:number)
  {
    this.myservice.getdiplomas(id).subscribe(
      (data: any)=>{
        this.diplomas=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.diplomas);
    }
    getalllanguages(id:number)
  {
    this.myservice.getlanguages(id).subscribe(
      (data: any)=>{
        this.languages=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.languages);
    }
    getallexperiences(id:number)
    {
      this.myservice.getexperiences(id).subscribe(
        (data: any)=>{
          this.experiences=data;
          console.log(data);
        },
        (err: any)=>{
          console.log(err);
        }
      );
      console.log(this.experiences);
      }
      getcandidate(id:number)
  {
    this.myservice.getcandidate(id).subscribe(
      (data: any)=>{
        this.candidate=data;
        console.log(data);
      },
      (err: any)=>{
        console.log(err);
      }
    );
    console.log(this.candidate);
    }

    updatecandidate(id:any,candidate:any)
    {
      candidate.countryId=candidate.countryId-0;
      candidate.drivingLicenceId=candidate.drivingLicenceId-0;
      candidate.salaryWishId=candidate.salaryWishId-0;
      if(this.response1 != undefined){
        candidate.picturePath=this.response1.dbPath;
      }
      if(this.response2 != undefined){
        candidate.cvPath=this.response2.dbPath;
      }     
      this.myservice.updatecandidate(id,candidate).subscribe(
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

    public createImgPath = (serverPath: string) => {
      return `https://localhost:44304/${serverPath}`;
    }

    public uploadPictureFinished = (event:any) => {
      this.response1 = event;
    }

    public uploadCvFinished = (event:any) => {
      this.response2 = event;
    }
  
}
