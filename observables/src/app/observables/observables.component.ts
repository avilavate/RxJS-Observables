import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'o-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit {
  myObservable: Observable<string>;
  create() {
    this.myObservable = Observable.create(observer => {
      observer.next("Start");
      // Yield a single value and complete
      setTimeout(() => {
        observer.next('some data from observable.');
      }, 1000, observer);
      setTimeout(() => {
        observer.next('some more data from observable.');
      }, 1500, observer);

      setTimeout(() => {
        observer.complete();
      }, 2000, observer);


      // Any cleanup logic might go here
      return () => console.log('disposed')
    });

    this.myObservable.subscribe(
      (data) => { console.log(data); },
      () => { console.log("error..."); },
      () => { console.log("Completed...") });
  }
  constructor() { }
  ngOnInit() { }
}
