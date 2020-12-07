import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { AuthComponent } from './composants/auth/auth.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { DetailPersonneComponent } from './composants/detail-personne/detail-personne.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { IndexComponent } from './composants/index/index.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { ParentComponent } from './composants/parent/parent.component';
import { PereComponent } from './composants/pere/pere.component';
import { PersonnesComponent } from './composants/personnes/personnes.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AuthaGuard } from './guards/autha.guard';
import { LeaveGuard } from './guards/leave.guard';
import { VEHICULE_ROUTES} from './modules/vehicule/vehicule-routing.module';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';




const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent , canActivate:[AuthaGuard]},
  { path: 'index', component: IndexComponent },
  { path: 'formulaire', component: FormulaireComponent, canDeactivate:[LeaveGuard] },
  { path: 'calculette', component: CalculetteComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent},
  { path: 'personnes',component:PersonnesComponent},
  { path: 'vehicule', children: VEHICULE_ROUTES},
  { path: 'detailPersonne', component:DetailPersonneComponent},
  { path: 'pere', component:PereComponent},
  { path: 'update/:id', component: UpdatePersonneComponent },
  { path: 'parent', component: ParentComponent },
  { path:  'auth', component: AuthComponent},
  { path:  'observable', component: ObservableComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
