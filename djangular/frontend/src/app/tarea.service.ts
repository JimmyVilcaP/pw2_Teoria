import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl, { headers: this.httpHeaders });
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.baseUrl, tarea, { headers: this.httpHeaders });
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.baseUrl}${tarea.id}/`, tarea, { headers: this.httpHeaders });
  }

  deleteTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}/`, { headers: this.httpHeaders });
  }
}