import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public candidatures: any[] = []
  candidature: any={}
  stat:any={};
  constructor(private router : Router, public http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit(): void {
    let role = localStorage.getItem("role")
    if (role =="candidat")
    this.router.navigateByUrl('/');
    this.http.get("https://localhost:44338/Stats")
      .subscribe(
        (result) => { this.stat = result },
        (error) => { console.log(error) }
      )
  }

  @ViewChild('myCalendar', { static: false }) myCalendar: jqxCalendarComponent;
    ngAfterViewInit(): void {
      
      this.http.get<any>("https://localhost:44338/Candidatures")
      .subscribe((data: any)=> {                     
            data.forEach((element: any) => {              
              let date = new Date(element.jobInterviewDate);
              console.log(date);
              this.myCalendar.addSpecialDate(date, '', "candudature: " + element.id);
        });
});
      
    }

    afficher(date:string, msg:string){
      let date1 = new Date(date);
      this.myCalendar.addSpecialDate(date1, '', msg);
    }
  

}
