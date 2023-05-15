import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  public isEditable = true;
  public imagenescuela = 'https://drive.google.com/uc?id=1lkFK18gMx2osd7OnKM3HGUtnRzJrYYqK'
  public escuela = 'Colegio San Agustín';
  public tipoEducacion = 'Educación Inicial, Primaria y Secundaria';
  public fechainicioFechafin = '2003 - 2017';
  public imagenuniversidad = 'https://drive.google.com/uc?id=1OZ74pxwzfcgPXkGmgsQlKURpHNIxzGw9'
  public universidad = 'Universidad FASTA';
  public carrera = 'Martillera y Corredora Pública';
  public fechainicio1Fechafin1 = '2018 - 2020';
  public imagencurso = 'https://drive.google.com/uc?id=17AK0a0qbx2eaHNArhpiKkY5n2kN8_yIz'
  public cursos = 'Argentina Programa #SeProgramar';
  public certificado = 'Curso de programación';
  public fechainicio2Fechafin2 = 'Mayo 2022 - Julio 2022';
  public estaLogueado = false;

  activarEdicion() {
    this.isEditable = true;
  }

  guardarEdicion() {
    this.isEditable = false;
  }
}