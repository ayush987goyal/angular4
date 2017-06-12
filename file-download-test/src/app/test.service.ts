import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TestService {
    constructor(private http: Http) {}

    getExpress(){
        return this.http.get('http://localhost:3000/rep');
    }
}