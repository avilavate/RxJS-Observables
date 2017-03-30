import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectComponent } from './observables/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
