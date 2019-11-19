import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('appNav') public appNav: NavbarComponent; //ElementRef;
  constructor() { }

  ngOnInit() {
    this.appNav.showLogin(false);
    this.appNav.showLogout(true);
    console.log(this.appNav);
  }

}
