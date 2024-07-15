import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { Observable, from } from 'rxjs';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private baseUrl = 'http://127.0.0.1:8000/api/tareas/';

  constructor(private axiosService: AxiosService) { }

  getTareas(): Observable<Tarea[]> {
    return from(this.axiosService.get(this.baseUrl).then(response => response.data));
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return from(this.axiosService.post(this.baseUrl, tarea).then(response => response.data));
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    return from(this.axiosService.put(`${this.baseUrl}${tarea.id}/`, tarea).then(response => response.data));
  }

  deleteTarea(id: number): Observable<void> {
    return from(this.axiosService.delete(`${this.baseUrl}${id}/`).then(response => response.data));
  }
}
