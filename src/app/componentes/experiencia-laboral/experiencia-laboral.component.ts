import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit{
  
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
    });
  }
  
  public isEditable = false;
  public imagentrabajo = 'https://drive.google.com/uc?id=1HUrVEc8QwRH_l2v-RkbS3KovdgC0gdkh'
  public nombreEmpresa = 'Instituto de Lenguas Extranjeras. ILE.';
  public puesto = 'Community Manager. Diseñadora. Administración.';
  public fechainicioFechafinTrabajo = 'Diciembre 2022 - Actualidad';
  public imagentrabajo1 = 'https://drive.google.com/uc?id=1SYTF9ZidKd8QgKDc_EVJCAdeIZdUdnwi'
  public nombreEmpresa1 = 'Clases individuales de Italiano';
  public puesto1 = 'Enseñanza del idioma y desarrollo de material didáctico';
  public fechainicio1FechafinTrabajo1 = 'Octubre 2020 - Actualidad';

  activarEdicion() {
    this.isEditable = true;
  }

  guardarEdicion() {
    this.isEditable = false;
  }
}
