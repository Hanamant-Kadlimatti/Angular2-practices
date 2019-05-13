import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'
import {DataService} from './data.service'

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  providers: [LoginService, DataService]
})
export class CmpAComponent implements OnInit {

  value = '';
  items: string[] = []

  constructor(private loginService : LoginService, private dataService: DataService) {
   }

   onLog(value: string) {
     console.log("kjsaljiasdjiosa")
       this.loginService.writeToLog(value)
   }

   onStore(value: string) {
     this.dataService.addData(value)
   }

   onGet() {
     this.items = this.dataService.getData().slice(0)
   }

   onSend (value: string) {
     this.dataService.pushData(value)
   }

  ngOnInit() {
  }

}
