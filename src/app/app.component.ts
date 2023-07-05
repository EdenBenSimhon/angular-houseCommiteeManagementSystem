import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {LoginService} from "./login/login.service";
import {HouseCommitteeService} from "./house-committee/house-committee.service";
import {UpdateService} from "./update/update.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  userLogin : boolean = false;
  welcomeMessage: string = "ברוכים הבאים למערכת ניהול ועד הבית";
  updateMessage: string = "העדכונים מעודכנים לפי השעה ההאחרונה.";
  title = 'angular-houseCommitteeManagementSystem';
  private activatedSub!:Subscription;
  constructor(private updateService : UpdateService) {
  }
  //value =11;
  ngOnInit() {
    this.updateService.activatedEmitter.asObservable().subscribe(didactivated => {
      this.userLogin = didactivated;
      // this.activatedSub=this.updateService.activatedEmitter.subscribe(
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
