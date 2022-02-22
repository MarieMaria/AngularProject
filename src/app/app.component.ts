import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = true;
  logs = [];
  
  onDisplayDetails(){
    if (this.displayDetails)
      this.displayDetails = false;
    else
      this.displayDetails = true;

    this.logs.push(this.logs.length + 1);
  }
}
