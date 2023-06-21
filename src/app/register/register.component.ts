import { Component } from '@angular/core';
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
  tempTenant : tenantInterface;
  constructor(private router :Router, private registerService :RegisterService) {
    this.tempTenant = {} as tenantInterface;

  }
  onSubmit(form: NgForm) {
    this.registerService.register(form);
    form.reset();
  }

}
