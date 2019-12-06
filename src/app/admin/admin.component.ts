import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userList: any[];
  constructor(private auth: AuthService, private api: ApiService, private route: Router) { }

  ngOnInit() {
    if (!this.auth.isLogin()) {
      this.route.navigate(["","login"]).then(res=>{
      }).catch(err=>{
      });
    }

    this.api.getUsers().then(resJson=>{
      console.log("AdminComponent: resJson ", resJson);
      if (resJson.data) {
        this.userList = resJson.data;
      }
    }).catch(err=>{
      
    });
  }

}
