import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user: any;
isLogin :boolean =false;


constructor(private router :Router, private authService: AuthService ,private httpClient: HttpClient) {
  this.user = {
    email: null ,
    password: null
  };
}
  onSubmit(form: NgForm) {
  this.authService.login(form);
  form.reset();
  }


}
