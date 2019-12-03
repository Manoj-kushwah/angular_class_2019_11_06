import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'angulartest';

  constructor(private auth: AuthService){
  }

  ngOnInit(){
    this.auth.setLogin(false);
  }

  /**
   * isAuth
   */
  public isAuth() {
    return this.auth.isLogin();
  }

}
