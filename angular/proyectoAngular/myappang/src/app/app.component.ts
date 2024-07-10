import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, HelloWorldComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = ['Ryan', 'Joe', 'Cameron', 'John'];
  activated = false;
  title = 'myappang';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Jimmy Vilca Peralta";
    this.email = "jvilcapera@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Anime", "Lectura"];
    this.showHobbies = false;
  }

  newHobby(hobby: HTMLInputElement) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
  
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}
