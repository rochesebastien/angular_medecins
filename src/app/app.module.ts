import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/app.service.data'
import { MedecinsComponent }  from './medecins/app.medecins.component';
import { VisitesComponent }  from './visites/app.visites.component';
import { NavbarComponent }  from './navbar/app.navbar.component';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/app.connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'medecins', component: MedecinsComponent },
  { path: 'visites', component: VisitesComponent },
  { path: 'accueil',  component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,MedecinsComponent,VisitesComponent,NavbarComponent, AccueilComponent
  ],
  imports: [
    BrowserModule,HttpClientModule ,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

