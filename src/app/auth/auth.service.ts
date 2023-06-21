import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import {userInterface} from "./user.interface";
var currentUser ={}  as userInterface ;
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user : userInterface;
  private isAuthenticated  = false;
  constructor(private router: Router, private httpClient :HttpClient) {
    this._user ={} as userInterface;
  }

  public login(form :NgForm): void {
      this.httpClient.post<userInterface>('http://localhost:3000/login', form.value, {})
        .subscribe((data: any) => {
          var type = data.message.type;
          console.log(type.message)
          if (type == 'Invalid username or password') {
            console.log("Something wrong");
            this.isAuthenticated = false;
          } else {
            this._user=data.message;
            currentUser=this._user;
            this.isAuthenticated = true;
            if(type=="IsAdmin"){
              console.log("isAdmin")
              this.router.navigate(['/housecommitte']);
            }
            else {
              console.log("isTenant")
              this.router.navigate(['/tenant']);
            }
          }
        });

  }

  public logout() {
    this.isAuthenticated= false;
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public get user(): userInterface {
    return this._user;
  }
  getCurrentUser(){
    return currentUser;
  }
  setCurrentUser(user:userInterface){
    currentUser=user;
  }

}
