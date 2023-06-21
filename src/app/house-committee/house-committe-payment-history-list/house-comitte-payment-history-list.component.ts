import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaymentHistoryService} from "../../payments/payment-history/payment-hisotry.service";
import {userInterface} from "../../auth/user.interface";

@Component({
  selector: 'app-house-committe-payment-history-list',
  templateUrl: './house-comitte-payment-history-list.component.html',
  styleUrls: ['./house-comitte-payment-history-list.component.css']
})
export class HouseCommitteePaymentHistoryListComponent {
  tenantsList: any = []
  selectedTenant : any ;
  showDropdown = false;
  constructor(private httpClient:HttpClient,private paymentHistoryService :PaymentHistoryService) {
  }

  ngOnInit() {
    this.tenantsList = []
    this.getAllApartments();
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
    this.selectedTenant = {name: this.selectedTenant.name , apartmentNumber : this.selectedTenant.apartment_number}
    console.log(this.selectedTenant)
    this.paymentHistoryService.setCurrentUser(this.selectedTenant);
    this.paymentHistoryService.getPaymentHistory(this.selectedTenant);
  }


}
