import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ChildComponent} from './child/child.component';
import {MatButtonModule} from "@angular/material/button";
import {CustomAttributeDirective} from './custom_directive/custom-attribute.directive';
import {CustomElementDirective} from './custom_directive/custom-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CustomAttributeDirective,
    CustomElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
