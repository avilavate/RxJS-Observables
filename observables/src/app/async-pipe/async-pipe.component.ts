import { Component, OnInit } from '@angular/core';
import { OServiceService } from "../ObservableService/o-service.service";

@Component({
  selector: 'o-async-pipe',
  templateUrl:'./async-pipe.component.html' ,
})
export class AsyncPipeComponent implements OnInit {
  myPromise: Promise<string>;

  constructor(public oServiceService: OServiceService) {
    this.myPromise=this.oServiceService.myPromise;
  }

  ngOnInit() {
  }

}
