import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {PaymentHistoryService} from "./payment-hisotry.service";
import {paymentHistoryInterface} from "./payment-history.interface";

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent {
  paymentHistoryList :any  = []
  constructor(private router: Router, private paymentHistoryService: PaymentHistoryService, private authService: AuthService) {
  }

  ngOnInit(){
      this.paymentHistoryService.getPaymentHistory(this.authService.getCurrentUser());
      this.addToList();
  }

  addToList() {
    this.cleanList();
    for (let i = 0; i < this.paymentHistoryService.payment.historyPayment.length; i++) {
      var temp = {name : this.paymentHistoryService.payment.name
        , apartmentNumber: this.paymentHistoryService.payment.apartmentNumber
        ,address : this.paymentHistoryService.payment.address ,
        paymentAmount : this.paymentHistoryService.payment.paymentAmount
        ,historyPayment :this.paymentHistoryService.payment.historyPayment[i] }
      this.paymentHistoryList.push(temp);
    }
  }
  cleanList(){
    this.paymentHistoryList = []
  }
}
