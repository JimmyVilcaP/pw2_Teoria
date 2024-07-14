import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas(): void {
    this.tareaService.getTareas().subscribe(tareas => this.tareas = tareas);
  }

  completarTarea(tarea: Tarea): void {
    tarea.completada = !tarea.completada;
    this.tareaService.updateTarea(tarea).subscribe();
  }

  eliminarTarea(id: number): void {
    this.tareaService.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== id);
    });
  }
}
