import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreCandidaturesService {
  Mescandidatures:any=[];
  url="https://localhost:44338/Candidatures";
  constructor(private http:HttpClient) { }
      deleteMesCandidature(id:number){
        return this.http.delete(`${this.url}/${id}`);
      }
}
