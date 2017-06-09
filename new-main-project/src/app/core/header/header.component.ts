import { Component } from '@angular/core';
import { DataStorageServcie } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageServcie: DataStorageServcie, private authService: AuthService) { }

    onSaveData() {
        this.dataStorageServcie.storeRecipes().subscribe(
            (response: Response) => { console.log(response) }
        );
    }

    onFetchData() {
        this.dataStorageServcie.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}