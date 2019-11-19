import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angulartest';

  @ViewChild('appNav') public appNav: NavbarComponent; //ElementRef;
  constructor() { }

  ngOnInit() {
    this.appNav.showLogin(true);
    //this.appNav.showLogout(true);
    console.log(this.appNav);
  }

}
