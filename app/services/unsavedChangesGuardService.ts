import { CanDeactivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UnsavedChangesGuardService implements CanDeactivate {
    
    constructor(private _rounter: Router) {}

    canDeactivate(){
        return window.confirm("You have unsaved changes.  Still want to leave?");
    }
}