import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService, globalCurrentUser} from "../auth/auth.service";
import {SharedService} from "../shared/shared.service";
import {NgForm} from "@angular/forms";
import {userInterface} from "../auth/user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  error: any = null;
  constructor(private router : Router , private httpClient: HttpClient, private authService: AuthService) {
  }

  public login(form: NgForm): void {
    console.log(form.value);
    this.httpClient.post<userInterface>('http://localhost:3000/login', form.value, {})
      .subscribe((data: any) => {
        this.authService.login(data.token);
        var type = data.message.role;
        this.authService.updateGlobalUser(data.message);
        console.log(data.message);
        console.log("the type is : ");
        console.log(type)
        if (this.authService.isAdmin()) {
          console.log("this is admin");
          this.router.navigate(['/housecommitte']);
        } else {
          console.log("isTenant");
          this.router.navigate(['/tenant']);
        }
      });
  }

}
