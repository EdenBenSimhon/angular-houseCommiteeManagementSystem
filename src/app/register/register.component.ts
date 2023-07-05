import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "./register.service";
import {tenantInterface} from "../tenant/tenant.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') signupForm!:NgForm;

  tempTenant : tenantInterface;
  constructor(private router :Router, public registerService :RegisterService) {
    this.tempTenant = {} as tenantInterface;

  }
  ngOnInit(){
    this.registerService.selectTenant();
    this.registerService.tenantsList = []
  }
  onSubmit() {
    this.registerService.register(this.signupForm);
    this.signupForm.reset();
  }

}
