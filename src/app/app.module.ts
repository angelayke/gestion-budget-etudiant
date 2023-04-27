import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenService } from './services/token.service';
import { StorageService } from './services/storage.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AuthService } from './services/auth.service';
import { TokenInjectorService } from './services/token-injector.service';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';

import { ConnexionComponent } from './components/connexion/connexion.component';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { DepensesComponent } from './components/depenses/depenses.component';
import { RevenusComponent } from './components/revenus/revenus.component';
import { RevenusSemaineComponent } from './components/revenus-semaine/revenus-semaine.component';
import { DepensesSemaineComponent } from './components/depenses-semaine/depenses-semaine.component';
import { RevenusMoisComponent } from './components/revenus-mois/revenus-mois.component';
import { DepensesMoisComponent } from './components/depenses-mois/depenses-mois.component';
import { RevenusSemaineGraphiqueComponent } from './components/revenus-semaine-graphique/revenus-semaine-graphique.component';
import { DepensesSemaineGraphiqueComponent } from './components/depenses-semaine-graphique/depenses-semaine-graphique.component';
import { RevenusMoisGraphiqueComponent } from './components/revenus-mois-graphique/revenus-mois-graphique.component';
import { DepensesMoisGraphiqueComponent } from './components/depenses-mois-graphique/depenses-mois-graphique.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProfilEditComponent } from './components/profil-edit/profil-edit.component';
import { LiensutilesComponent } from './components/liensutiles/liensutiles.component';
import { FiltersService } from './services/filters.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SinscrireComponent,
    SeconnecterComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CalculatriceComponent,
    DepensesComponent,
    RevenusComponent,
    RevenusSemaineComponent,
    DepensesSemaineComponent,
    RevenusMoisComponent,
    DepensesMoisComponent,
    RevenusSemaineGraphiqueComponent,
    DepensesSemaineGraphiqueComponent,
    RevenusMoisGraphiqueComponent,
    DepensesMoisGraphiqueComponent,
    ProfilComponent,
    ProfilEditComponent,
    LiensutilesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    StorageService,
    TokenService,
    TokenInjectorService,
    AuthService,
    FiltersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
