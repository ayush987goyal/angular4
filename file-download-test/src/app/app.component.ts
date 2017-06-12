import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { TestService } from "./test.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') testForm: NgForm;

  testText: string = '';
  expressTest: string ='' ;

  constructor(private testService: TestService){}

  onSubmit() {
    this.testText = this.testForm.value.test;
    console.log(this.testText);
    let blob = new Blob([this.testText], { type: "text/plain;charset=utf-8" });
    // let blob = new Blob([this.testForm.value], { type: "application/json;charset=utf-8" });
    FileSaver.saveAs(blob, "hello world.txt");
  }

  onTest(){
      this.testService.getExpress().subscribe(
        (response) => {
            // this.expressTest = msg;
            console.log(response.text());
        }
      );
  }

}
