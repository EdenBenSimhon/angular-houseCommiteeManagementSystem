import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import {userInterface} from "./user.interface";
import {SharedService} from "../shared/shared.service";
import jwt_decode from "jwt-decode";
export var globalCurrentUser = {} as userInterface;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';

  constructor(private router: Router, private httpClient: HttpClient) {
    // this.sharedService.getGlobalVar().subscribe(value =>{
    //   this.globalCurrentUser = value;
    // });
  }

  public login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    console.log(token)
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const expirationTimestamp = decodedToken.exp * 1000;
      if (expirationTimestamp < Date.now()) {
          this.logout();
      }
    }
    return !!localStorage.getItem(this.tokenKey);
  }

  updateGlobalUser(value: userInterface) {
    console.log(value)
    globalCurrentUser = value;
  }

  getGlobalUser() {
    return globalCurrentUser;
  }

  getName() {
    return globalCurrentUser.name;
  }

  getApartmentNumber() {
    return globalCurrentUser.apartmentNumber;
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isAdmin(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const decodedToken: any = jwt_decode(token);
      console.log(decodedToken)
      return decodedToken.role === 'admin';
    }
    return false;
  }

  getApartmentNumberFromToken() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.id;
    }
  }

}

