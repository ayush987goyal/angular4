import { Component } from '@angular/core';
import { DataStorageServcie } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageServcie: DataStorageServcie){}

    onSaveData(){
        this.dataStorageServcie.storeRecipes().subscribe(
            (response: Response) => {console.log(response)}
        );
    }

    onFetchData(){
        this.dataStorageServcie.getRecipes();
    }
}