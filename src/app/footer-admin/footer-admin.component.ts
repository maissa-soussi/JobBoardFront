import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class FooterAdminComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
