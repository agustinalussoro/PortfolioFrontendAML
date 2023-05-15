import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  public isEditable = true;
  public nombre = 'Agustina M. Lussoro';
  public profesion = 'Full Stack Developer Jr &\nMartillera y Corredora Pública';
  public descripcion = 'Con habilidades en conocimientos informáticos, capacidad de adaptación, proactividad, planificación de tareas, creatividad y trabajo en equipo. A mis 23 años, estoy comprometida en desarrollar mi carrera profesional en ambos campos, lo que me permite tener una visión más amplia y versátil. Me apasiona aprender y aplicar nuevas tecnologías para mejorar procesos y crear soluciones innovadoras. Estoy en busca de nuevas oportunidades para seguir creciendo profesionalmente.';
  public estaLogueado = true;

  activarEdicion(): void {
    this.isEditable = true;
  }

  guardarEdicion(): void {
    this.isEditable = false;
  }

   iniciarSesion(): void {
    this.isEditable = true;
    this.estaLogueado = true;

  }

  cerrarSesion(): void {
    this.isEditable = false;
    this.estaLogueado = false;
  }
}