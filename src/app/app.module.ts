import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { LoginComponent } from './authentificate/login/login.component';
import { RegisterLoginComponent } from './authentificate/register-login/register-login.component';
import { RecoveryLoginComponent } from './authentificate/recovery-login/recovery-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ModulosModule} from './modulos/modulos.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterLoginComponent,
    RecoveryLoginComponent,
    // ModulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModulosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
