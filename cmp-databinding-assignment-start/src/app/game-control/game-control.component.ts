import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  mainNumber: number = 0;
  myVar;

  @Output() timerStarted = new EventEmitter<{ myNumber: number }>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    // this.myVar = setInterval(this.timerFunc(), 1000);
    this.myVar = setInterval(() => {
      this.mainNumber += 1;
      this.timerStarted.emit({ myNumber: this.mainNumber });
    }, 1000);
  }

  onPause() {
    clearInterval(this.myVar);
  }

}
