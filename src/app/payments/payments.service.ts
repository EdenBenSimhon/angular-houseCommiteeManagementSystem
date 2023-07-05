import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {SharedService} from "../shared/shared.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  paymentAmount ='' ;
  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }


  getApartmentNumber(){
    return this.authService.getApartmentNumberFromToken();
  }

  getApartmentDetails(){
    //post request to backend and DB
    // this.authService.getGlobalUser().apartmentNumber;
  }

  getPaymentAmount(){
    console.log(this.authService.getApartmentNumberFromToken());
    this.httpClient.post<any>('http://localhost:3000/paymentamount', this.authService.getApartmentNumberFromToken(), {})
      .subscribe(data => {
       console.log(data.message)
        this.paymentAmount=data.message;
      });
    return this.paymentAmount;
  }

  createPayment(){

  }

}
