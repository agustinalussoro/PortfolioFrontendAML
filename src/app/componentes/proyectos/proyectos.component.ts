import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
    });
  }

  public isEditable = false;
  public proyecto = 'Diseño de Portfolio Web para Argentina Programa'
  public descripcion = 'Desarrollo de mi propio Portfolio Web. Este trabajo consiste en el desarrollo de una aplicación web full stack que muestra mis datos personales, educación, experiencia laboral, habilidades y proyectos en los que he trabajado.';

  activarEdicion() {
    this.isEditable = true;
  }

  guardarEdicion() {
    this.isEditable = false;
  }
}