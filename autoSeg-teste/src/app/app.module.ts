import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AberturaComponent } from './abertura/abertura.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';
import { routing } from './app-routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarListaComponent } from './criar-lista/criar-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AberturaComponent,
    CadastroComponent,
    LoginComponent,
    ListasComponent,
    CriarListaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
