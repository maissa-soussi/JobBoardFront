import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCandidateService {
  url1="https://localhost:44338/Candidates";
  constructor(private http:HttpClient) { }
      addCandidate(candidate:any){
        console.log(candidate);
        return this.http.post(this.url1,candidate);
       }       
}
