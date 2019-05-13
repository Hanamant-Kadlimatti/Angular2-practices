import { Injectable, EventEmitter } from '@angular/core';
import {LoginService} from './login.service'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  pushedData = new EventEmitter<String>();

  constructor(private loginService: LoginService) { }

  private data: string[] = []

  addData(input: string) {
     this.data.push(input);
     this.loginService.writeToLog('Saved Item : ' + input);
  }

  getData() {
    return this.data;  
  }

  pushData(value: string) {
    this.pushedData.emit(value)
  }
}
