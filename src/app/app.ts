import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Doc} from '../doc/doc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Doc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angulasDOMMarcRomagueraFernandez');
}
