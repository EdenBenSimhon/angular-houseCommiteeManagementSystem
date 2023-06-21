import {Component, Input, Output} from '@angular/core';
import {CreateUpdateService} from "./create-update.service";

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent {
  @Output() inputMessage : any  ;
  clickButton :boolean = false;
  constructor(private createUpdateService : CreateUpdateService) {
  }


  handleButtonClick() {
    this.clickButton = false;
    console.log('Input Text:', this.inputMessage);
    this.createUpdateService.createNewUpdate(this.inputMessage);
    this.clickButton=true;
  }


}
