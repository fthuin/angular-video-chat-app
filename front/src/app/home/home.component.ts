import { Component, OnInit } from '@angular/core';
import uuidv4 from 'uuid/dist/v4';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createRoom() {
    console.log('createRoom');
    this.router.navigate([`/${uuidv4()}`]);
  }

}
