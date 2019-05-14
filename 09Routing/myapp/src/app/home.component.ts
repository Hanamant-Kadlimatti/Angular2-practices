import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
 
param: string;
private subscription: Subscription

  constructor(private router :Router) { 
    // this.subscription = router.routerState.queryParams.subscribe(
    //   (queryParam : any) => this.param = queryParam['anylitics']
    // )
         
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe;
  }

}
