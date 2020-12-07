import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
import { VoitureComponent } from './voiture/voiture.component';



export const VEHICULE_ROUTES: Routes = [
  { path: 'voiture', component: VoitureComponent },
  { path: 'camion',component:CamionComponent},
  { path: '', component: VoitureComponent }

];

@NgModule({
  imports: [RouterModule.forChild(VEHICULE_ROUTES)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
