import { Component } from '@angular/core';
import {CmpAComponent} from './cmp-a.component';
import {CmaBComponent} from './cma-b.component'
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DataService]
})
export class AppComponent {

}
