/* Base angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

/* services */
import { TokenService } from './services/token.service';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { TokenInjectorService } from './services/token-injector.service';
import { CalculatorService } from './services/calculator.service';
import { FiltersService } from './services/filters.service';

/* *Interceptior */
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';

/* components */
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
import { FloatingCalculatorButtonComponent } from './components/floating-calculator-button/floating-calculator-button.component';
import { MainComponent } from './components/main/main.component';

/* Modules */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';



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
    FloatingCalculatorButtonComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule
  ],
  providers: [
    StorageService,
    TokenService,
    TokenInjectorService,
    AuthService,
    FiltersService,
    CalculatorService,

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
