import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assTitle='Assignment Work !!';
  onClick(){
    console.log("button click");
  }
}
