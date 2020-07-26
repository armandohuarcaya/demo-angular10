import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import {ModulosComponent} from './modulos.component';
import { PruebaComponent } from './prueba/prueba.component'


@NgModule({
  declarations: [ModulosComponent, PruebaComponent],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule
  ],
  exports: []
})
export class ModulosModule { }
