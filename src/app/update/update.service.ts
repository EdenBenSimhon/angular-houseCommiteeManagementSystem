import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  activatedEmitter = new Subject<boolean>;
  messagelist :any =[] ;

  isCalled :boolean = false;
  constructor(private router: Router, private httpClient: HttpClient) {

  }

  public getUpdates() {
    this.messagelist = []
    this.httpClient.get<any>('http://localhost:3000/updates')
      .subscribe((data: any) => {
        for (let i = 0; i < data.message.length; i++) {
            this.messagelist.push(data.message[i]);
            //console.log(data.message[i])
        }
      });
  }


}
function signal(arg0: never[]): any[] {
    throw new Error("Function not implemented.");
}

