import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import {ROUTER_DIRECTIVES} from '@angular/router'
@Component({ 
  selector: 'app-user',
  templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css'],
  // directives : [ROUTER_DIRECTIVES]
})
export class UserComponent implements  OnDestroy {


// Another way to navigate link 
private subscription : Subscription
id: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // this.id = activatedRoute.snapshot.params['id'];

    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    )
   }
  onNavigat () {
     this.router.navigate(['/'], {queryParams: {'analytics' : 100}})
  }

  ngOnInit() {
  }

   ngOnDestroy() {
     this.subscription.unsubscribe;
   }
}
