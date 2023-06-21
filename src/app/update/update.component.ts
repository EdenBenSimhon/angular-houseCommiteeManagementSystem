import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PaymentHistoryService} from "../payments/payment-history/payment-hisotry.service";
import {UpdateService} from "./update.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  messageList :any =[]

  constructor(private router: Router, private updateService: UpdateService) {
  }

  ngOnInit() {
      this.updateService.getUpdates();
      this.messageList = this.updateService.messagelist;
  }

}
