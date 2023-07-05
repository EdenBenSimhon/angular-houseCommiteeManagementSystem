import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {AuthService} from "./auth.service";
import {HttpHeaders} from "@angular/common/http";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
//   canActivate1(): boolean {
//
//     if (token) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
// }
