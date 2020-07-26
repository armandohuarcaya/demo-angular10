import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentificate/login/login.component';
import { RegisterLoginComponent } from './authentificate/register-login/register-login.component';
import { RecoveryLoginComponent } from './authentificate/recovery-login/recovery-login.component';
import { ModulosComponent } from './modulos/modulos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterLoginComponent,
  },
  {
    path: 'recovery',
    component: RecoveryLoginComponent,
  },
  {
    path: 'modulos',
    // component: ModulosComponent,
    loadChildren: () => import('./modulos/modulos.module').then(res => res.ModulosModule),
    // loadChildren: 'app/modulos/modulos.module#ModulosModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
