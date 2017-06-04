import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus = ['stable', 'critical', 'finished'];
  projectForm: FormGroup;
  notAllowedName = 'Test';

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.forbiddennamesAsyn.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === this.notAllowedName) {
      return { 'nameIsForbidden': true };
    }

    return null;
  }

  forbiddennamesAsyn(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(()=>{
        if(control.value === this.notAllowedName){
          resolve({'nameIsForbidden': true});
        }
        else{
          resolve(null);
        }
      },1000);
    });

    return promise;
  }
}
