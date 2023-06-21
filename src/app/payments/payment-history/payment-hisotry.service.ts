import {userInterface} from "../../auth/user.interface";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {paymentHistoryInterface} from "./payment-history.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PaymentHistoryService {
  private currentUser: userInterface;
  payment : any ;
  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();

    ;
  }

  public getPaymentHistory(data:userInterface) {
    this.httpClient.post<any>('http://localhost:3000/paymentHistory', this.currentUser, {})
      .subscribe(data => {
        this.payment = data.message;
        console.log(this.payment)
      });
  }

  public setCurrentUser(data :userInterface){
    this.currentUser=data;
  }



}
