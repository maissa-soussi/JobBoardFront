import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreCandidaturesService {
  JobOfferCandidatures:any=[];
  url="https://localhost:44338/Candidatures";
  url1="https://localhost:44338/JobOfferCandidatures";
  constructor(private http:HttpClient) { }
  getJobOfferCandidatures(id:number){
    this.JobOfferCandidatures=this.http.get(`${this.url1}/${id}`);
    return this.JobOfferCandidatures;
      }
      deleteCandidature(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
      updateCandidature(id:any,candidature:any)
       {
         return this.http.put(this.url+'/'+id,candidature) ;
       }
}
