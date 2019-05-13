import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  writeToLog(logMessage : string) {
      console.log(logMessage)
  }

  constructor() { }
}
