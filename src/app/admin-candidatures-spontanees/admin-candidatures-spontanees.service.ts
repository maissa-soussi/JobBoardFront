import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminCandidaturesSpontaneesService {
    CandidaturesSpontanees:any=[];
  url="https://localhost:44338/CandidatureSponts";
  constructor(private http:HttpClient) { }
  getCandidaturesSpontanees(){
    this.CandidaturesSpontanees=this.http.get(this.url);
    return this.CandidaturesSpontanees;
      }
      deleteCandidatureSpontanee(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
      updateCandidatureSpontanee(id:any,CandidatureSpontanee:any)
       {
         return this.http.put(this.url+'/'+id,CandidatureSpontanee) ;
       }
}
