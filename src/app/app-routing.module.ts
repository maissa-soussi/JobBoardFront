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
import { AuthGuard } from './auth.guard';
import { AdminCandidatProfileComponent } from './admin-candidat-profile/admin-candidat-profile.component';

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
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "parametre",
    component: ParametreComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "candidats",
    component: CandidatComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "admins",
    component: GestionAdminsComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path: "offres-admin",
    component: AdminOffresComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "candidatures-admin",
    component: AdminCandidaturesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "offre-candidatures/:id",
    component: OffreCandidaturesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "candidature-spontannee",
    component: CandidatureSpontanneeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "mescandidatures",
    component: MesCandidaturesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "candidat-profile",
    component: AdminCandidatProfileComponent,
    canActivate:[AuthGuard]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
