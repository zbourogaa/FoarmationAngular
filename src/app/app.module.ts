import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { IndexComponent } from './composants/index/index.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { PersonnesComponent } from './composants/personnes/personnes.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { DetailPersonneComponent } from './composants/detail-personne/detail-personne.component';
import { PereComponent } from './composants/pere/pere.component';
import { FilsComponent } from './composants/fils/fils.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { TitreComponent } from './composants/titre/titre.component';
import { ChildComponent } from './composants/child/child.component';
import { ParentComponent } from './composants/parent/parent.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ObservableComponent } from './composants/observable/observable.component';



@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    IndexComponent,
    FormulaireComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    PersonnesComponent,
    DetailPersonneComponent,
    PereComponent,
    FilsComponent,
    UpdatePersonneComponent,
    TitreComponent,
    ChildComponent,
    ParentComponent,
    AuthComponent,
    ObservableComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VehiculeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
