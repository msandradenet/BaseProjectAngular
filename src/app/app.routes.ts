import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteEditarComponent } from './clientes/cliente-editar/cliente-editar.component';
import { ClienteCriarComponent } from './clientes/cliente-criar/cliente-criar.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'cliente-criar', component: ClienteCriarComponent },
    { path: 'cliente-editar/:id', component: ClienteEditarComponent }
];