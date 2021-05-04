import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {
  Languages:any=[];
  LanguageLevels:any=[];
  DrivingLicences:any=[];
  Countries:any=[];
  Domains:any=[];
  EducationLevels:any=[];
  Experiences:any=[];
  ContratTypes:any=[];
  SalaryWishes:any=[];
  url1="https://localhost:44338/Languages";
  url2="https://localhost:44338/LanguageLevels";
  url3="https://localhost:44338/DrivingLicences";
  url4="https://localhost:44338/Countries";
  url5="https://localhost:44338/Domains";
  url6="https://localhost:44338/EducationLevels";
  url7="https://localhost:44338/Experiences";
  url8="https://localhost:44338/ContratTypes";
  url9="https://localhost:44338/SalaryWishes";
  constructor(private http:HttpClient) { }
      updateLanguage(id:any,Language:any)
       {
         return this.http.put(this.url1+'/'+id,Language) ;
       }
       updateLanguageLevel(id:any,LanguageLevel:any)
       {
         return this.http.put(this.url2+'/'+id,LanguageLevel) ;
       }
       updateDrivingLicence(id:any,DrivingLicence:any)
       {
         return this.http.put(this.url3+'/'+id,DrivingLicence) ;
       }
       updateCountry(id:any,Country:any)
       {
         return this.http.put(this.url4+'/'+id,Country) ;
       }
       updateDomain(id:any,Domain:any)
       {
         return this.http.put(this.url5+'/'+id,Domain) ;
       }
       updateEducationLevel(id:any,EducationLevel:any)
       {
         return this.http.put(this.url6+'/'+id,EducationLevel) ;
       }
       updateExperience(id:any,Experience:any)
       {
         return this.http.put(this.url7+'/'+id,Experience) ;
       }
       updateContratType(id:any,ContratType:any)
       {
         return this.http.put(this.url8+'/'+id,ContratType) ;
       }
       updateSalaryWish(id:any,SalaryWish:any)
       {
         return this.http.put(this.url9+'/'+id,SalaryWish) ;
       }
}
