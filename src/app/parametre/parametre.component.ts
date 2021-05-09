import { Component, OnInit } from '@angular/core';
import { ParametreService } from './parametre.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  //objets pour le select
  public languages: any[] = []
  public languageLevels: any[] = []
  public diplomes: any[] = []
  public DrivingLicences: any[] = []
  public Countries: any[] = []
  public Domaines: any[] = []
  public Experiences: any[] = []
  public StudiesLevels: any[] = []
  public Contrats: any[] = []
  public Salaires: any[] = []
  public Etats: any[] = []
  // objets pour l'ajout
  public nvlanguage: any = {}
  public nvlanguagelevel: any = {}
  public nvdiplome: any = {}
  public nvdrivinglicence: any = {}
  public nvcountry: any = {}
  public nvdomaine: any = {}
  public nvexperience: any = {}
  public nvstudieslevel: any = {}
  public nvcontrat: any = {}
  public nvsalaire: any = {}
  public nvetat: any = {}
  t:any={};

  constructor(private myservice: ParametreService, public http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/');
    else 
    {
    //get languages
    this.http.get<any>("https://localhost:44338/Languages")
      .subscribe(
        (result) => { this.languages = result },
        (error) => { console.log(error) }
      )
      //get level languages
      this.http.get<any>("https://localhost:44338/LanguageLevels")
      .subscribe(
        (result) => { this.languageLevels = result },
        (error) => { console.log(error) }
      )
      //get diplomes
      this.http.get<any>("https://localhost:44338/Diplomas")
      .subscribe(
        (result) => { this.diplomes = result },
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
      //get Contrat types
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
      //get Etats
      this.http.get<any>("https://localhost:44338/Status")
      .subscribe(
        (result) => { this.Etats = result },
        (error) => { console.log(error) }
      )
  }}
  // void pour delete
  languageDelete(id:number){
    if (confirm('Voulez vous supprimé cette langue ?'))
      {
        this.http.delete(`https://localhost:44338/Languages/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  languageLevelDelete(id:number){
    if (confirm('Voulez vous supprimé ce niveau de langue ?'))
      {
        this.http.delete(`https://localhost:44338/LanguageLevels/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  diplomeDelete(id:number){
    if (confirm('Voulez vous supprimé ce diplome ?'))
      {
        this.http.delete(`https://localhost:44338/Diplomas/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  drivingLicenceDelete(id:number){
    if (confirm('Voulez vous supprimé ce type de permis ?'))
      {
        this.http.delete(`https://localhost:44338/DrivingLicences/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  countryDelete(id:number){
    if (confirm('Voulez vous supprimé ce pays ?'))
      {
        this.http.delete(`https://localhost:44338/Countries/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  domaineDelete(id:number){
    if (confirm('Voulez vous supprimé ce domaine ?'))
      {
        this.http.delete(`https://localhost:44338/Domains/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  educationlevelDelete(id:number){
    if (confirm('Voulez vous supprimé ce niveau d études ?'))
      {
        this.http.delete(`https://localhost:44338/EducationLevels/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  experienceDelete(id:number){
    if (confirm('Voulez vous supprimé cette expérience ?'))
      {
        this.http.delete(`https://localhost:44338/Experiences/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }
  contratDelete(id:number){
    if (confirm('Voulez vous supprimé ce type de contrat ?'))
      {
        this.http.delete(`https://localhost:44338/ContratTypes/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }
  salaireDelete(id:number){
    if (confirm('Voulez vous supprimé ce marge de salaire?'))
      {
        this.http.delete(`https://localhost:44338/SalaryWishes/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }
  etatDelete(id:number){
    if (confirm('Voulez vous supprimé cet état?'))
      {
        this.http.delete(`https://localhost:44338/Status/${id}`)
      .subscribe(
        err =>{console.log(err)}
      );
      window.location.reload()
      }
  }

  // void pour l'ajout 
  addLanguage(){
    this.http.post("https://localhost:44338/Languages",this.nvlanguage).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Langue existe deja");
        console.log(err);
      }
    );
    this.nvlanguage={};
    window.location.reload()
  } 

  addLanguageLevel(){
    this.http.post("https://localhost:44338/LanguageLevels",this.nvlanguagelevel).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Niveau existe deja");
        console.log(err);
      }
    );
    this.nvlanguagelevel={};
    window.location.reload()
  } 

  addDiplome(){
    this.http.post("https://localhost:44338/Diplomas",this.nvdiplome).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Niveau existe deja");
        console.log(err);
      }
    );
    this.nvlanguagelevel={};
    window.location.reload()
  } 

  addDrivingLicence(){
    this.http.post("https://localhost:44338/DrivingLicences",this.nvdrivinglicence).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Type de permis existe deja");
        console.log(err);
      }
    );
    this.nvdrivinglicence={};
    window.location.reload()
  }

 

  addDomaine(){
    this.http.post("https://localhost:44338/Domains",this.nvdomaine).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Domaine existe deja");
        console.log(err);
      }
    );
    this.nvdomaine={};
    window.location.reload()
  }

  addEducationLevel(){
    this.http.post("https://localhost:44338/EducationLevels",this.nvstudieslevel).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Niveau existe deja");
        console.log(err);
      }
    );
    this.nvstudieslevel={};
    window.location.reload()
  }

  addCountry(){
    this.http.post("https://localhost:44338/Countries",this.nvcountry).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Pays existe deja");
        console.log(err);
      }
    );
    this.nvcountry={};
    window.location.reload()
  }

  addExperience(){
    this.http.post("https://localhost:44338/Experiences",this.nvexperience).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Experience existe deja");
        console.log(err);
      }
    );
    this.nvexperience={};
    window.location.reload()
  }

  addContrat(){
    this.http.post("https://localhost:44338/ContratTypes",this.nvcontrat).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Type de contrat existe deja");
        console.log(err);
      }
    );
    this.nvcontrat={};
    window.location.reload()
  } 

  addSalaire(){
    this.http.post("https://localhost:44338/SalaryWishes",this.nvsalaire).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Salaire existe deja");
        console.log(err);
      }
    );
    this.nvsalaire={};
    window.location.reload()
  }

  addEtat(){
    this.http.post("https://localhost:44338/Status",this.nvetat).subscribe(
      (data)=>{
        alert("Ajouté avec succès");
        return data;
      },
      (err)=>{
        alert("Etat existe deja");
        console.log(err);
      }
    );
    this.nvetat={};
    window.location.reload()
  }
  
  updateLanguage(id:any,Language:any)
    {
      this.myservice.updateLanguage(id,Language).subscribe(
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

    updateLanguageLevel(id:any,LanguageLevel:any)
    {
      this.myservice.updateLanguageLevel(id,LanguageLevel).subscribe(
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

    updateDiplome(id:any,Diplome:any)
    {
      this.myservice.updateDiplome(id,Diplome).subscribe(
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

    updateDrivingLicence(id:any,DrivingLicence:any)
    {
      this.myservice.updateDrivingLicence(id,DrivingLicence).subscribe(
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

    updateCountry(id:any,Country:any)
    {
      this.myservice.updateCountry(id,Country).subscribe(
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

    updateDomain(id:any,Domain:any)
    {
      this.myservice.updateDomain(id,Domain).subscribe(
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

    updateEducationLevel(id:any,EducationLevel:any)
    {
      this.myservice.updateEducationLevel(id,EducationLevel).subscribe(
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

    updateExperience(id:any,Experience:any)
    {
      this.myservice.updateExperience(id,Experience).subscribe(
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

    updateContratType(id:any,ContratType:any)
    {
      this.myservice.updateContratType(id,ContratType).subscribe(
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

    updateSalaryWish(id:any,SalaryWish:any)
    {
      this.myservice.updateSalaryWish(id,SalaryWish).subscribe(
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

    updateEtat(id:any,Etat:any)
    {
      this.myservice.updateEtat(id,Etat).subscribe(
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
    


}

