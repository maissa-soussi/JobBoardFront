import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    GestionAdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
