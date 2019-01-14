import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AberturaComponent } from './abertura/abertura.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [
    AppComponent,
    AberturaComponent,
    CadastroComponent,
    LoginComponent,
    ListasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
