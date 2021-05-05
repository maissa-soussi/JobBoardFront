import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['../dashboard/dashboard.component.css','./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {
  collapseShow = "hidden";
  public nom = localStorage.getItem("nom");
  public prenom = localStorage.getItem("prenom");
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapseShow(classes:any) {
    this.collapseShow = classes;
  }
}
