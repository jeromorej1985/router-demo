import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate {

    canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkIfLoggedIn(destination);
    }

    private checkIfLoggedIn(destination: ActivatedRouteSnapshot): boolean {
       // randomly return true or false

       let loggedIn: boolean = Math.random() < 0.5;
       if(!loggedIn) {
           console.log("LoginGuardService:  The user is not logged in and cannot navigate to %s", destination.component.name);
       }
       return loggedIn;
    }
    
}