import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app-to-do';
  constructor(){
    setTimeout(() => {
      this.title = "To-Do list basic"
    }, 3000);
  }
}
