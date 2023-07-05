import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Injectable, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {tenantInterface} from "../tenant/tenant.interface";
import {HouseCommitteeComponent} from "../house-committee/house-committee.component";
import {HouseCommitteeService} from "../house-committee/house-committee.service";
import {userInterface} from "../auth/user.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  tenantsList = [] as any;
  errorMessage: boolean = false;
  selectedTenantToDelete ={} as any;
  sortApartment = new Subject<boolean>;
  constructor(private router: Router, private httpClient: HttpClient) {

  }

  public register(form :NgForm) {
    this.errorMessage = false;
    this.httpClient.post<any>('http://localhost:3000/register', form.value, {})
      .subscribe(data => {
        console.log(data)
        if(data.message === false){
          this.errorMessage = true;
        }
      });
  }
  public selectTenant(){
      this.httpClient.get<any>('http://localhost:3000/tenants')
        .subscribe((data: any) => {
          for (let i = 0; i < data.message.length; i++) {
            this.tenantsList.push(data.message[i]);
          }
          this.sortList();
        });
    }

    public deleteTenant(){
      this.httpClient.post<any>('http://localhost:3000/deletetenant'
        ,this.selectedTenantToDelete,{})
        .subscribe((data: any) => {
        });
      this.selectedTenantToDelete =''
    }
    public sortList(){
     this.tenantsList.sort((a:any,b:any) => a.apartment_number  - b.apartment_number);
     }


}
