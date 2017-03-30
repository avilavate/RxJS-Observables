import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'o-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.mySubsription.unsubscribe();
    }
  mySubjectObservable: Subject<number>;
  mySubjects: number[];
  mySubsription: Subscription;

  constructor() {
    this.mySubjectObservable = new Subject()
   this.mySubsription= this.mySubjectObservable.subscribe((data) => {
      this.mySubjects = this.mySubjects || [];
      this.mySubjects.push(data);
    })
  }
  pushSubject(value: number) {
    this.mySubjectObservable.next(value);
  }
  ngOnInit() {
  }
  onUnsubscribe(){
     this.mySubsription.unsubscribe();
  }

}
