import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/tareas/',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get(url: string, params?: any) {
    return this.axiosClient.get(url, { params });
  }

  post(url: string, data: any) {
    return this.axiosClient.post(url, data);
  }

  put(url: string, data: any) {
    return this.axiosClient.put(url, data);
  }

  delete(url: string) {
    return this.axiosClient.delete(url);
  }
}
