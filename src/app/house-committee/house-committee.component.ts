import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {HouseCommitteeService} from "./house-committee.service";
import {HttpClient} from "@angular/common/http";
import {PaymentHistoryService} from "../payments/payment-history/payment-hisotry.service";

@Component({
  selector: 'app-house-committee',
  templateUrl: './house-committee.component.html',
  styleUrls: ['./house-committee.component.css']
})
export class HouseCommitteeComponent {
  tenantsList: any = []
  selectedTenant: any ;
  paymentHistory : boolean =false;
  createUpdate : boolean = false;
  constructor(private router: Router, private authService: AuthService, private httpClient: HttpClient,private paymentHistoryService :PaymentHistoryService) {
  }

  handleButtonClick(selectedOption: string): void {
        this.router.navigate(['/' + selectedOption]);
  }

  logout() {
    this.authService.logout();
  }



  public selectOption(tenant: any) {
    this.selectedTenant = tenant;
  }

  public selectedOption(tenant: any){
  console.log(tenant)
  }
}
