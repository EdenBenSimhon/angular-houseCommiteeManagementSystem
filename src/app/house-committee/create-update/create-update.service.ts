import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateService {

  constructor(private router: Router, private httpClient: HttpClient) {

  }
  public createNewUpdate(update :any) {
    this.httpClient.post<any>('http://localhost:3000/createupdate', {message :update}, {})
      .subscribe(data => {
        console.log(data)
      });
  }
}
