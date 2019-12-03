import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.setLogin(false);
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
