import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminOffresService {
  offres:any=[];
  url="https://localhost:44304/api/JobOffers";
  constructor(private http:HttpClient) { }
  getoffres(){
    this.offres=this.http.get(this.url);
    return this.offres;
      }
      deleteOffre(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
      addOffre(offre:any){
        return this.http.post(this.url,offre);
       }
}
