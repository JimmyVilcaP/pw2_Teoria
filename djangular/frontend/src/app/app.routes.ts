import { Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';

export const routes: Routes = [
  { path: '', component: ListaTareasComponent },
  { path: 'crear', component: CrearTareaComponent }
];
