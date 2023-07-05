import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private globalVarSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setGlobalVar(value: any) {
    this.globalVarSubject.next(value);
  }

  getGlobalVar() {
    return this.globalVarSubject.value();
  }
}
