import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AppComponent.getInstance().setUiBtnLogin(false);
    AppComponent.getInstance().setUiBtnLogout(true);
  }

}
