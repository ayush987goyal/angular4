import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.css']
})
export class LogItemComponent implements OnInit {
  value = new Date();
  
  constructor() { 
    this.value = new Date();
  }

  ngOnInit() {
  }

}
