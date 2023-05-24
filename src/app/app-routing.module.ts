import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';
import { DepensesComponent } from './components/depenses/depenses.component';
import { RevenusComponent } from './components/revenus/revenus.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { MainComponent } from './components/main/main.component';
import { appRoutes } from 'src/constants/app-routes.constants';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { ProfilComponent } from './components/profil/profil.component';


const routes: Routes = [
  { path: appRoutes.index, redirectTo: appRoutes.login, pathMatch: 'full' },
  { path: appRoutes.login, component: SeconnecterComponent },
  { path: appRoutes.register, component: SinscrireComponent },
  {
    path: appRoutes.home,
    component: AccueilComponent,
    canActivate: [AuthGuard],
  },
  { path: appRoutes.main, component: MainComponent, canActivate: [AuthGuard] },
  {
   path: appRoutes.profil,
   component: ProfilComponent,
   canActivate: [AuthGuard]
  },
  {
    path: appRoutes.expenses,
    component: DepensesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: appRoutes.incomes,
    component: RevenusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: appRoutes.catchAll,
    component: FourOFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
