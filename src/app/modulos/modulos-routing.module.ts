import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { ModulosComponent } from './modulos.component';


const routes: Routes = [
  {
    path: '',
    component: ModulosComponent,
    children: [
      {
        path: 'modulos/person',
        component: PruebaComponent,
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
