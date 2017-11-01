import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ['black', 'blue', 'brown', 'gray', 'green', 'indigo', 'orange', 'pink', 'purple', 'red', 'violet', 'yellow'];
  random = function(){
	  return Math.floor(Math.random()*12);
  }
}
