import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { TareaService } from './tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    CrearTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }