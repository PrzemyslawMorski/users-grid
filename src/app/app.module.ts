import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UsersGridModule } from './users-grid/users-grid.module';
import { FirebaseModule } from './firebase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,

    BrowserModule,
    BrowserAnimationsModule,

    FirebaseModule,

    UsersGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
