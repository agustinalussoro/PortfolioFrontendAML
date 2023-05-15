import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public isEditable = true;
  public proyecto = 'Diseño de Portfolio Web para Argentina Programa'
  public descripcion = 'Desarrollo de mi propio Portfolio Web. Este trabajo consiste en el desarrollo de una aplicación web full stack que muestra mis datos personales, educación, experiencia laboral, habilidades y proyectos en los que he trabajado.';
  public estaLogueado = false;

  activarEdicion(): void {
    this.isEditable = true;
  }

  guardarEdicion(): void {
    this.isEditable = false;
  }
}