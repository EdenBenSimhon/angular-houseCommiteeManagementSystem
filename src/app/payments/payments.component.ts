import {Component, OnInit} from '@angular/core';
import {PaymentsService} from "./payments.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{
  public apartmentNumber : any;
  paymentAmount : any;

  constructor(public paymentService : PaymentsService ) {
  }

  ngOnInit() {
    this.paymentAmount=this.paymentService.getApartmentNumber();

  }

}
