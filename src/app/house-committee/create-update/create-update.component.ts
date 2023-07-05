import {Component, Input, Output, ViewChild} from '@angular/core';
import {CreateUpdateService} from "./create-update.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent {

  inputMessage: any;
  clickButton: boolean = false;
  showNavBarToChild : boolean = true;
  constructor(private createUpdateService: CreateUpdateService) {
  }


  handleButtonClick() {
    this.clickButton = false;
    console.log('Input Text:', this.inputMessage);
    this.createUpdateService.createNewUpdate(this.inputMessage);
    this.inputMessage=''

  }

  showAllMessages() {
    this.inputMessage=''
    this.clickButton = true;
    this.showNavBarToChild = false;
  }
  }

