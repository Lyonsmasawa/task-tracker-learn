import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //the tag you will use to embedd your component in html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tasc Tracker';
}
