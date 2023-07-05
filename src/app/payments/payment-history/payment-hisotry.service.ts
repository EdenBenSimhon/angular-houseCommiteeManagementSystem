import {userInterface} from "../../auth/user.interface";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {paymentHistoryInterface} from "./payment-history.interface";
import {Injectable, signal} from "@angular/core";
import {SharedService} from "../../shared/shared.service";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentHistoryService {
  paymentHistoryList= [] as any;
  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService
  ,private sharedService : SharedService) {
  }

  getPaymentHistory() {
      this.httpClient.post<any>('http://localhost:3000/paymentHistory', this.authService.getGlobalUser(), {})
      .subscribe(data => {
        this.addToList(data.message);
      });

  }

  addToList(payment :any) {
    this.cleanList();
     console.log("call from add to list ");
    for (let i = 0; i < payment.historyPayment.length; i++) {
      var temp = {name : payment.name
        , apartmentNumber: payment.apartmentNumber
        ,address : payment.address ,
        paymentAmount : payment.paymentAmount
        ,historyPayment :payment.historyPayment[i] }
      this.paymentHistoryList.push(temp);
    }
  }
  cleanList(){
    console.log("call from clean to list ");
    this.paymentHistoryList = [];
  }

  getPaymentHistoryProtected() {
    const token = this.authService.getToken();
    this.httpClient.get<any>('http://localhost:3000/paymentHistoryproteceted',{ headers: { Authorization: `Bearer ${token}`}})
      .subscribe(data => {
        this.addToList(data.message);
        console.log(data);
      });

  }
}
