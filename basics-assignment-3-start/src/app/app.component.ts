import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .fiveTimes{
        color: white;
      }
  `]
})
export class AppComponent {
  toShow = true;
  allClicks = [];

  onToggleClick(){
    this.allClicks.push('Yo');
    if(this.toShow === true){
      this.toShow = false;
      return true;
    }
    else{
      this.toShow = true;
      return false;
    }
  }

  isFiveTimes(){
    return (this.allClicks.length >= 5 ? 'blue': 'orange');
  }
}
