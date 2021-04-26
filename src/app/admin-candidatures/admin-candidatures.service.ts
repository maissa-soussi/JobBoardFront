import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminCandidaturesService {
  candidatures:any=[];
  url="https://localhost:44304/api/Candidatures";
  constructor(private http:HttpClient) { }
  getcandidatures(){
    this.candidatures=this.http.get(this.url);
    return this.candidatures;
      }
}
