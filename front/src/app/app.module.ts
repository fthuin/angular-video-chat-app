import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import {SocketIoModule} from "ngx-socket-io";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot({
      url: '/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
