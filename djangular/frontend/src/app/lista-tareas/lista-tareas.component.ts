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
    this.tareaService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
      this.renderTareas();
    });
  }

  renderTareas(): void {
    const listaTareas = document.getElementById('lista-tareas');
    if (listaTareas) {
      listaTareas.innerHTML = '';
      this.tareas.forEach(tarea => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.classList.add('completada');
        span.innerText = tarea.titulo;
        li.appendChild(span);

        const completarButton = document.createElement('button');
        completarButton.innerText = tarea.completada ? 'Descompletar' : 'Completar';
        completarButton.addEventListener('click', () => this.completarTarea(tarea));
        li.appendChild(completarButton);

        const eliminarButton = document.createElement('button');
        eliminarButton.innerText = 'Eliminar';
        eliminarButton.addEventListener('click', () => this.eliminarTarea(tarea.id));
        li.appendChild(eliminarButton);

        listaTareas.appendChild(li);
      });
    }
  }

  completarTarea(tarea: Tarea): void {
    tarea.completada = !tarea.completada;
    this.tareaService.updateTarea(tarea).subscribe(() => this.renderTareas());
  }

  eliminarTarea(id: number): void {
    this.tareaService.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== id);
      this.renderTareas();
    });
  }
}
