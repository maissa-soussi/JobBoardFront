import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateCandidateService {
  diplomas:any=[];
  languages:any=[];
  experiences:any=[];
  candidate:any={}
  url1="https://localhost:44338/Candidates";
  url2="https://localhost:44338/CandidateLanguages";
  url3="https://localhost:44338/CandidateExperiences";
  url4="https://localhost:44338/CandidateDiplomas";
  constructor(private http:HttpClient) { }
  getcandidate(id:number){
    this.candidate=this.http.get(`${this.url1}/${id}`);
    return this.candidate;
    }
    updatecandidate(id:any,candidate:any)
    {
      return this.http.put(this.url1+'/'+id,candidate) ;
    }
    getdiplomas(id:number){
      this.diplomas=this.http.get(`${this.url4}/${id}`);
      return this.diplomas;
      }
    getlanguages(id:number){
      this.languages=this.http.get(`${this.url2}/${id}`);
      return this.languages;
      }
    getexperiences(id:number){
      this.experiences=this.http.get(`${this.url3}/${id}`);
      return this.experiences;
      }
       addCandidateLanguage(candidateLanguage:any){
        console.log(candidateLanguage);
        return this.http.post(this.url2,candidateLanguage);
       }
       addCandidateExperience(candidateExperience:any){
        console.log(candidateExperience);
        return this.http.post(this.url3,candidateExperience);
       }
       addCandidateDiploma(candidateDiploma:any){
        console.log(candidateDiploma);
        return this.http.post(this.url4,candidateDiploma);
       }
}
