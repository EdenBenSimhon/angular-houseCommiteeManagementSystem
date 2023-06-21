import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getIsAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
