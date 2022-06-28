import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HourParentComponent } from './hour-parent/hour-parent.component';
import { HourChildrenComponent } from './hour-children/hour-children.component';

@NgModule({
  declarations: [
    AppComponent,
    HourParentComponent,
    HourChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
