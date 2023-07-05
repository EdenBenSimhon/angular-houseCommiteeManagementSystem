import {userInterface} from "../auth/user.interface";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {PaymentHistoryService} from "../payments/payment-history/payment-hisotry.service";
import {Subject} from "rxjs";

export class HouseCommitteeService {

  tenantsList : any =[]
  activatedEmitter =  new Subject<boolean>;

  constructor(private router: Router, private httpClient: HttpClient,private paymentHistoryService : PaymentHistoryService) {
  }

  public getAllTenants(){
    this.httpClient.get<any>('http://localhost:3000/apartments')
      .subscribe((data: any) => {
        for (let i = 0; i < data.message.length; i++) {
          this.tenantsList.push(data.message[i]);
          console.log(data.message[i])
        }
        }
      );
  }
}
