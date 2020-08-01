import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RoomComponent} from "./room/room.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':roomId',
    component: RoomComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
