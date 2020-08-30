import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] //optional attribute   -> external style file
  styles:[`   
    h3 {
      color: dodgerblue;
    }
  `] //-> internal/inline style, used when we have very small code
})
export class AppComponent {
  title = 'LearnAngular';
}
