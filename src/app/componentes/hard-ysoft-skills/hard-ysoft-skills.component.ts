import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard-ysoft-skills',
  templateUrl: './hard-ysoft-skills.component.html',
  styleUrls: ['./hard-ysoft-skills.component.css']
})

export class HardYSoftSkillsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public isEditable = true;
  public hardSkillDes = 'Lenguajes de Programación Frontend: HTML, CSS, Typescript y JavaScript'
  public porcentaje = '80%';
  public hardSkillDes1 = 'Lenguajes de Programación Backend: Java y MySQL';
  public porcentaje1 = '70%';
  public hardSkillDes2 = 'Desarrollo de aplicaciones web con Bootstrap y Angular'
  public porcentaje2 = '90%';
  public softSkill = 'Habilidades Interpersonales: resiliencia, compromiso, motivación, curiosidad, autodisciplina y responsabilidad';
  public porcentajeS = '90%';
  public softSkill1 = 'Competencias Sociales: empatía, capacidad de integración, comunicación y para trabajar en equipo.';
  public porcentajeS1 = '90%';
  public softSkill2 = 'Habilidades Metódicas: habilidades analíticas, capacidad de organización, técnicas de presentación y resolución de problemas';
  public porcentajeS2 = '80%';
  public estaLogueado = false;

  activarEdicion(): void {
    this.isEditable = true;
  }

  guardarEdicion(): void {
    this.isEditable = false;
  }
}