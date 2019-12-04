import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  
  constructor(private route: Router, private auth: AuthService, private api: ApiService) { }

  ngOnInit() {
    this.auth.setLogin(false);
  }

  /**
   * submitLogin
   */
  public submitLogin() {
    console.log("email: ", this.email, "password: ", this.password);
    this.api.login(this.email, this.password).then(response=>{
      console.log('response: ', response);
      if (response.data != null) {
        this.goToAdmin();
      }
    }).catch(error => {
      console.log('error: ', error);
    });
    return false;
  }

  /**
   * goToAdmin
   */
  public goToAdmin() {
    this.route.navigate(['', 'admin']).then(res=>{
      console.log('res: ', res);
      this.auth.setLogin(true);
    }).catch(err=>{
      console.log('err: ', err);
    })
  }
}
