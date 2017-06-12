import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') testForm: NgForm;

  testText: string = '';

  onSubmit() {
    this.testText = this.testForm.value.test;
    console.log(this.testText);
    let blob = new Blob([this.testText], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "hello world.txt");
  }

}
