import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  candidats:any=[];
  url="https://localhost:44338/Candidates";

  constructor(private http:HttpClient) { }
  getcandidats(){
    this.candidats=this.http.get(this.url);
    return this.candidats;
      }
      deleteCandidat(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
}