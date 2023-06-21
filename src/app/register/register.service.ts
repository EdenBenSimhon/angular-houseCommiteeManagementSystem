import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {NgForm} from "@angular/forms";
import {tenantInterface} from "../tenant/tenant.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private router: Router, private httpClient: HttpClient) {

  }

  public register(form :NgForm) {
    this.httpClient.post<any>('http://localhost:3000/register', form.value, {})
      .subscribe(data => {
      });
  }



}
