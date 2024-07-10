import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myappang';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];

  constructor() {
    console.log("Constructor working...");
    this.name = "Jimmy Vilca Peralta";
    this.email = "jvilcapera@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Anime", "Lectura"];
  }

  showhobbies() {
    return true;
  }
}
