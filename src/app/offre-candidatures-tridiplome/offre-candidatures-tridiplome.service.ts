import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreCandidaturesTridiplomeService {
  JobOfferCandidatures:any=[];
  url1="https://localhost:44338/TriDiploma";
  url="https://localhost:44338/Candidatures";


  constructor(private http:HttpClient) { }
  getJobOfferCandidatures(id:any){
    this.JobOfferCandidatures=this.http.get(`${this.url1}/${id}`);
  
    return this.JobOfferCandidatures;
      }
      deleteCandidature(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
     
}
