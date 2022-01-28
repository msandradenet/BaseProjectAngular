import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Define o local para PT-BR
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';

import { rootRouterConfig } from './app.routes';

import { ClienteService } from './servicos/clientes.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteEditarComponent } from './clientes/cliente-editar/cliente-editar.component';
import { ClienteCriarComponent } from './clientes/cliente-criar/cliente-criar.component';


const maskConfig: Partial<IConfig> = {
  validation: true
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ClientesComponent,
    ClienteEditarComponent,
    ClienteCriarComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ClienteService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
