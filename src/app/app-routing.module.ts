import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loby',
    loadChildren: () => import('./loby/loby.module').then( m => m.LobyPageModule)
  },
  {
    path: 'add-consulta',
    loadChildren: () => import('./add-consulta/add-consulta.module').then( m => m.AddConsultaPageModule)
  },
  {
    path: 'examenes',
    loadChildren: () => import('./examenes/examenes.module').then( m => m.ExamenesPageModule)
  },
  {
    path: 'ehereditarias',
    loadChildren: () => import('./ehereditarias/ehereditarias.module').then( m => m.EHereditariasPageModule)
  },
  {
    path: 'hvacunas',
    loadChildren: () => import('./hvacunas/hvacunas.module').then( m => m.HVacunasPageModule)
  },
  {
    path: 'alergias',
    loadChildren: () => import('./alergias/alergias.module').then( m => m.AlergiasPageModule)
  },
  {
    path: 'henfermedades',
    loadChildren: () => import('./henfermedades/henfermedades.module').then( m => m.HenfermedadesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
