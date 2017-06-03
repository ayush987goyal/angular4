import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username='Initial';

  isUsernameEmpty(){
    return (this.username === '');
  }

  onReset(){
    this.username = '';
  }
}
