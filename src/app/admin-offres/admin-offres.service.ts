import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminOffresService {
  offres:any=[];
  url="https://localhost:44338/JobOffers";
  constructor(private http:HttpClient) { }
  getoffres(){
    this.offres=this.http.get(this.url);
    return this.offres;
      }
      deleteOffre(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
      addOffre(offre:any){
        console.log(offre);
        return this.http.post(this.url,offre);
       }
       updateOffre(id:any,offre:any)
       {
         return this.http.put(this.url+'/'+id,offre) ;
       }
}
