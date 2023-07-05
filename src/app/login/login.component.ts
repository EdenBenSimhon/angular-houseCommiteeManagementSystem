import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm, NgModelGroup} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {LoginService} from "./login.service";
import {interval, Observable, of, Subscription} from "rxjs";
import {IntervalObservable} from "rxjs-compat/observable/IntervalObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild("authForm") loginForm! : NgForm;
  private firstObsSubscription!: Subscription;
  user: any;
  isLogin: boolean = false;

  constructor(private router: Router, public loginService: LoginService, private httpClient: HttpClient) {
    this.user = {
      email: null,
      password: null
    };
  }

  ngOnInit() {
    // const myObservable = of(1, 2, 3);
// Create observer object
//     const myObserver = {
//       next: (x: number) => console.log('Observer got a next value: ' + x),
//       error: (err: Error) => console.error('Observer got an error: ' + err),
//       complete: () => console.log('Observer got a complete notification'),
//     };

// Execute with the observer object
//     myObservable.subscribe(myObserver);
  };

  ngOnDestroy(): void {

  }

  onSubmit() {
  this.loginService.login(this.loginForm);
  this.loginForm.reset();
  }


}
