import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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
export class PaymentHistoryComponent implements OnInit{
  @Input() showNavBarFromParent: boolean = true;
  constructor(private router: Router, public paymentHistoryService: PaymentHistoryService, private authService: AuthService) {
  }

  ngOnInit() : void {
    //this.paymentHistoryService.getPaymentHistory();
      console.log("show nav bar form parent : " + this.showNavBarFromParent);
      if (this.showNavBarFromParent == true) {
        this.paymentHistoryService.getPaymentHistoryProtected();
      } else {
        this.paymentHistoryService.getPaymentHistory();
      }

  }


}
