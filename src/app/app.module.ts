import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieComponent
  ],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
