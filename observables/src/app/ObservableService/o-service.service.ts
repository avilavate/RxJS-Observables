import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OServiceService {
  project: Subject<any> = new Subject<any>();
  constructor(public http: Http) {
    //subscribe

    this.project.subscribe(result => console.log('Subscription Streaming:', result));
    http.get('https://jsonplaceholder.typicode.com/comments').subscribe(result => {
      //push onto subject
      console.dir(result);
      this.project.next(result["_body"]);
    });
  }
}
