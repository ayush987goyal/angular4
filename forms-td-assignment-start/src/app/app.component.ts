import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') mainForm: NgForm;

  defaultSub = 'advanced';

  onSubmit() {
    console.log(this.mainForm.value);
    this.mainForm.form.reset();
  }
}
