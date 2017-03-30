import { Component } from '@angular/core';
import { OServiceService } from "./o-service.service";

@Component({
  selector: 'o-subscriber',
  templateUrl: './subscriber.component.html'
  })
export class SubscriberComponent {
  res: number;
  constructor(public oServiceService: OServiceService) {this.Subscribe() }
  Subscribe() {
    this.oServiceService.project.subscribe((jsonResponce) => {
     this.res = (<string>jsonResponce).length;
    })
  }
}
