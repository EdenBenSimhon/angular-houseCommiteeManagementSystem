import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PaymentHistoryService} from "../payments/payment-history/payment-hisotry.service";
import {UpdateService} from "./update.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit,OnDestroy{
  messageList :any =[]
  @Input() showNavBarFromParent: boolean = true;

  constructor(private router: Router, private updateService: UpdateService,private authService : AuthService) {
  }

  ngOnInit() {
        this.updateService.getUpdates();
        this.messageList = this.updateService.messagelist;
        this.updateService.activatedEmitter.next(true);
  }
  ngOnDestroy(){
    this.updateService.activatedEmitter.next(false);
  }

}
