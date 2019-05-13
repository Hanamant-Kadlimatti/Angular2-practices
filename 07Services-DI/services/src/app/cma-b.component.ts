import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {DataService} from './data.service'

@Component({
  selector: 'app-cma-b',
  templateUrl: './cma-b.component.html',
  styleUrls: ['./cma-b.component.css'],
  providers: [LoginService, DataService]
})
export class CmaBComponent implements OnInit {
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
  ngOnInit() {
    this.dataService.pushedData.subscribe(
      data => this.value = data
    );
  }

}
