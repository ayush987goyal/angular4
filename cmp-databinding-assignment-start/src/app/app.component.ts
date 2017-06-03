import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theNumber : number[] = [0];

  onBegin(numberData: { myNumber: number }) {
    this.theNumber.push (numberData.myNumber) ;
  }

}
