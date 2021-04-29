import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCandidaturesComponent } from './admin-candidatures/admin-candidatures.component';
import { OffreCandidaturesComponent } from './offre-candidatures/offre-candidatures.component';
import { AdminOffresComponent } from './admin-offres/admin-offres.component';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatureSpontanneeComponent } from './candidature-spontannee/candidature-spontannee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionAdminsComponent } from './gestion-admins/gestion-admins.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MesCandidaturesComponent } from './mes-candidatures/mes-candidatures.component';
import { OffresComponent } from './offres/offres.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "offres",
    component: OffresComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "parametre",
    component: ParametreComponent
  },
  {
    path: "candidats",
    component: CandidatComponent
  },
  {
    path: "admins",
    component: GestionAdminsComponent
  }
  ,
  {
    path: "offres-admin",
    component: AdminOffresComponent
  },
  {
    path: "candidatures-admin",
    component: AdminCandidaturesComponent
  },
  {
    path: "offre-candidatures",
    component: OffreCandidaturesComponent
  },
  {
    path: "candidature-spontannee",
    component: CandidatureSpontanneeComponent
  },
  {
    path: "mescandidatures",
    component: MesCandidaturesComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
