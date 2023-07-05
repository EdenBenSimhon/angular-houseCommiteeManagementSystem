import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent {
  collapsed = true;

  constructor(private router :Router,private authService: AuthService) {
  }

  handleButtonClick(selectedOption: string): void {
        this.router.navigate(['/'+selectedOption]);
  }

  logout() {
    this.authService.logout();
  }
  getNameOfUser(){
    return this.authService.getName(); //need be observable
  }
}
