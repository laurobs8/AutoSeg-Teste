import { Routes, RouterModule } from '@angular/router';
import { AberturaComponent } from './abertura/abertura.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CriarListaComponent } from './criar-lista/criar-lista.component';

const APP_ROUTER: Routes = [
    { path: '', component: AberturaComponent },
    { path: 'abertura', component: AberturaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'login', component: LoginComponent},
    { path: 'listas', component: ListasComponent},
    { path: 'criar', component: CriarListaComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
