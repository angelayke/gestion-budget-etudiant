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
import { FormulaireUpdateDepenseComponent } from './components/formulaire-update-depense/formulaire-update-depense.component';
import { FormulaireDepensesComponent } from './components/formulaire-depenses/formulaire-depenses.component';
import { ConnexionComponent } from './components/connexion/connexion.component';



const routes: Routes = [
  { path: appRoutes.index, redirectTo: appRoutes.login, pathMatch: 'full' },
  //changer login pour connexion et ajouter en dessous le path pour connexion 
  //puis l'ajouter aussi dans app-route constant.ts ainsi que lien etc tout ce quon veut aller
  //rajouter dans children: lien, editprofil
  //probleme lorsquon remplace login par connexion, on est plus capable dacceder a se connecter et sinscrire
  //on  a perdu aussi la modification des depenses-se calquer sur ajout depense pour lui?
  { path: appRoutes.login, component: SeconnecterComponent },
  { path: appRoutes.register, component: SinscrireComponent },
  { path: appRoutes.connexion, component: ConnexionComponent },
  {
    path: appRoutes.home,
   component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: appRoutes.accueil,
        component: AccueilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: appRoutes.index,
        component: AccueilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: appRoutes.profil,
        component: ProfilComponent,
        canActivate: [AuthGuard]
       },
       {
         path: `${appRoutes.expenses}/:id`,
         component: FormulaireUpdateDepenseComponent,
         canActivate: [AuthGuard],
       },
       {
         path: appRoutes.expenses,
         component: DepensesComponent,
         canActivate: [AuthGuard],
       },
       {
         path: appRoutes.expenses + '/:id',
         component: FormulaireDepensesComponent,
         canActivate: [AuthGuard],
       },
       {
         path: appRoutes.incomes,
         component: RevenusComponent,
         canActivate: [AuthGuard],
       },
    ]
  },
  //{ path: appRoutes.main, component: MainComponent, canActivate: [AuthGuard] },
 
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
