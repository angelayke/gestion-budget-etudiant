import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';
import { DepensesComponent } from './components/depenses/depenses.component';
import { RevenusComponent } from './components/revenus/revenus.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'sinscrire', component: SinscrireComponent},
  {path: 'depenses', component: DepensesComponent, canActivate: [AuthGuard]},
  {path: 'revenus', component: RevenusComponent , canActivate: [AuthGuard]},
  {path: '**', component: ConnexionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
