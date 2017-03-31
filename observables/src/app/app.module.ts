import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectComponent } from './observables/subject.component';
import { ShortlengthPipe } from './shortlength.pipe';
import { FlyingHerosComponent } from './flyingHero/flying-heros/flying-heros.component';
import { FlyingHerosPipe } from './flyingHero/flying-heros.pipe';
import { OServiceService } from "./ObservableService/o-service.service";
import { SubscriberComponent } from './ObservableService/subscriber.component';
import { SecondSubjectSubscriberComponent } from './ObservableService/second-subject-subscriber.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    ShortlengthPipe,
    FlyingHerosComponent,
    FlyingHerosPipe,
    SubscriberComponent,
    SecondSubjectSubscriberComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
