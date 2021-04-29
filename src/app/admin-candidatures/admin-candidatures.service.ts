import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminCandidaturesService {
  candidatures:any=[];
  url="https://localhost:44338/Candidatures";
  constructor(private http:HttpClient) { }
  getcandidatures(){
    this.candidatures=this.http.get(this.url);
    return this.candidatures;
      }
      deleteCandidature(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
}
