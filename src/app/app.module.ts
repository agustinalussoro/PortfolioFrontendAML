import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardYSoftSkillsComponent } from './componentes/hard-ysoft-skills/hard-ysoft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import {HttpClientModule} from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HardYSoftSkillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
