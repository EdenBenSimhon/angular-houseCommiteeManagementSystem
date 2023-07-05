import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaymentHistoryService} from "../../payments/payment-history/payment-hisotry.service";
import {userInterface} from "../../auth/user.interface";
import {SharedService} from "../../shared/shared.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-house-committee-payment-history-list',
  templateUrl: './house-committee-payment-history-list.component.html',
  styleUrls: ['./house-committee-payment-history-list.component.css']
})
export class HouseCommitteePaymentHistoryListComponent {
  tenantsList: any = []
  selectedTenant : any = null ;
  showDropdown = false;
  clickButton = false;
  showNavBarToChild : boolean = true;
  constructor(private httpClient:HttpClient,private paymentHistoryService :PaymentHistoryService
             ,private autoService : AuthService) {
  }

  ngOnInit() {
    this.tenantsList = []
    this.getAllApartments();
    this.showNavBarToChild =false;
  }

  public getAllApartments() {
    this.httpClient.get<any>('http://localhost:3000/tenants')
      .subscribe((data: any) => {
          for (let i = 0; i < data.message.length; i++) {
            this.tenantsList.push(data.message[i]);
          }
        }
      );
  }

  public selectOption() {
    this.selectedTenant = {name: this.selectedTenant.name , apartmentNumber : this.selectedTenant.apartment_number};
    console.log(this.selectedTenant);
    this.autoService.updateGlobalUser(this.selectedTenant);
    this.getHistoryPayments();

  }
  getHistoryPayments() {
  this.paymentHistoryService.getPaymentHistory();
  this.clickButton = true;
  }
}
