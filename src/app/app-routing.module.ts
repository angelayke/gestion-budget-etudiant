import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';
import { DepensesComponent } from './components/depenses/depenses.component';
import { RevenusComponent } from './components/revenus/revenus.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {path: 'seconnecter', component: SeconnecterComponent},
  {path: 'sinscrire', component: SinscrireComponent},
  {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard]},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'depenses', component: DepensesComponent, canActivate: [AuthGuard]},
  {path: 'revenus', component: RevenusComponent , canActivate: [AuthGuard]},
  {path: '**', component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
