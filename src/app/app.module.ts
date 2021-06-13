import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DatePipe} from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OffresComponent } from './offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarCandidateComponent } from './navbar-candidate/navbar-candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ParametreComponent } from './parametre/parametre.component';
import { AdminOffresComponent } from './admin-offres/admin-offres.component';
import { CandidatComponent } from './candidat/candidat.component';
import { GestionAdminsComponent } from './gestion-admins/gestion-admins.component';
import { AdminCandidaturesComponent } from './admin-candidatures/admin-candidatures.component';
import { AdminCandidaturesSpontaneesComponent } from './admin-candidatures-spontanees/admin-candidatures-spontanees.component';
import { OffreCandidaturesComponent } from './offre-candidatures/offre-candidatures.component';
import { CandidatureSpontanneeComponent } from './candidature-spontannee/candidature-spontannee.component';
import { MesCandidaturesComponent } from './mes-candidatures/mes-candidatures.component';
import { MapComponent } from './map/map.component';
import { jqxCalendarModule }   from 'jqwidgets-ng/jqxcalendar';
import { AdminCandidatProfileComponent } from './admin-candidat-profile/admin-candidat-profile.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { UploadCoverletterComponent } from './upload-coverletter/upload-coverletter.component';
import { OffreCandidaturesTriComponent } from './offre-candidatures-tri/offre-candidatures-tri.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OffreCandidaturesTridiplomeComponent } from './offre-candidatures-tridiplome/offre-candidatures-tridiplome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    OffresComponent,
    ProfileComponent,
    NavbarCandidateComponent,
    DashboardComponent,
    SidebarAdminComponent,
    AdminNavbarComponent,
    FooterAdminComponent,
    AdminHeaderComponent,
    ParametreComponent,
    AdminOffresComponent,
    CandidatComponent,
    GestionAdminsComponent,
    AdminCandidaturesComponent,
    AdminCandidaturesSpontaneesComponent,
    OffreCandidaturesComponent,
    CandidatureSpontanneeComponent,
    MesCandidaturesComponent,
    MapComponent,
    AdminCandidatProfileComponent,
    AddCandidateComponent,
    UpdateCandidateComponent,
    UploadPictureComponent,
    UploadCvComponent,
    UploadCoverletterComponent,
    OffreCandidaturesTriComponent,
    OffreCandidaturesTridiplomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    jqxCalendarModule,
    DataTablesModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [AdminOffresComponent,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }