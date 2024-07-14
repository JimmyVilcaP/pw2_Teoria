import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {
  @ViewChild('tituloInput', { static: true }) tituloInput!: ElementRef<HTMLInputElement>;
  @ViewChild('descripcionTextarea', { static: true }) descripcionTextarea!: ElementRef<HTMLTextAreaElement>;

  id: number = 0;
  titulo: string = '';
  descripcion: string = '';
  completada: boolean = false;

  constructor() {}

  crearTarea(): void {
    const titulo = this.tituloInput.nativeElement.value;
    const descripcion = this.descripcionTextarea.nativeElement.value;

    console.log('Título:', titulo);
    console.log('Descripción:', descripcion);

    this.id = 0;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completada = false;
  }
}
