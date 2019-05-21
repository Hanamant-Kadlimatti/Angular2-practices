import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import 'rxjs/RX';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

 constructor (private http: Http) {}
  
 getData () {
      return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .map((response: Response) => response.json());
    }

    sendData (user : any) {
      const body = JSON.stringify(user);
      const headers = new Headers();
      headers.append('Content-Type', 'application.json')
      return this.http.post('http://dummy.restapiexample.com/api/v1/employees', body, {
        headers: headers
      }).map((data: Response) => data.json())
      .catch(this.handleError)
    }

    getOwnData () {
      return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .map((response : Response) => response.json())
    }

    private handleError ( error: any) {
      console.log(error)
      return Observable.throw(error)
    }
}
