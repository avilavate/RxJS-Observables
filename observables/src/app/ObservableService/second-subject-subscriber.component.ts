import { Component, OnInit } from '@angular/core';
import { OServiceService } from "./o-service.service";

@Component({
  selector: 'o-second-subject-subscriber',
  templateUrl: './second-subject-subscriber.component.html'
})
export class SecondSubjectSubscriberComponent implements OnInit {
  res: string;
  constructor(public oServiceService: OServiceService) {
    this.oServiceService.project.subscribe((jsonResponce) => {
      this.res = jsonResponce;
    });

  }

  ngOnInit() {
  }

}
