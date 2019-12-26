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
  newUser: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    dob: null,
    gender: null,
    role: null,
  };
  userList: any[];
  userListUi: any[];
  defaultSrc: string = 'data:image/png;base64,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';
  constructor(private auth: AuthService, private api: ApiService, private route: Router) { }

  ngOnInit() {
    if (!this.auth.isLogin()) {
      this.route.navigate(["","login"]).then(res=>{
      }).catch(err=>{
      });
    }
    this.getAllUser();
  }

  /**
   * getAllUser
   */
  public getAllUser() {
    this.api.getUsers().then(resJson=>{
      console.log("AdminComponent: resJson ", resJson);
      if (resJson.data) {
        this.userList = resJson.data;
        this.filterUser();
      }
    }).catch(err=>{
      
    });
  }

  /**
   * addNewUser
   */
  public addNewUser(user: any) {
    let userData = {
        // "email": "manojkushwah@gmail.com",
        // "firstName": "Manoj",
        // "lastName": "kushwah",
        // "gender": "male",
        // "dob": "678306659000",
        // "role": "1"
    };
    userData = user;
    this.api.addUser(userData).then((res:any)=>{
      console.log("res: ", res);
      if(res.data){
        this.getAllUser();
        this.hideBsModal('#addNewUser');
        this.resetForm('#newUserForm');
        alert(res.message);
      } else{
        alert(res.message);
      }
    }).catch((err)=>{
      console.log("err: ", err);
    });
  }

  /**
   * submitNewUser
   */
  public submitNewUser() {
    console.log('submitNewUser: ');
    console.log(this.newUser);

    if(this.newUser.firstName == null){
      // firstName error
    } else if(this.newUser.email == null){
      // Email error
    } else if(this.newUser.password == null){
      // Password error
    } else if(this.newUser.dob == null){
      // dob error
    } else if(this.newUser.gender == null){
      // gender error
    } else {
      this.addNewUser(this.newUser);
    }

    return false;
  }

  public filterUser(query?: string): void{
    this.userListUi = this.userList.filter(user => {
      return Boolean(!query || (query && String(user.firstName).concat(user.lastName,user.email).match(query)));
    });
  }

  /**
   * hideBsModal
   */
  public hideBsModal(id: string) {
    eval(`$('${id}').modal('hide')`);
  }

  /**
   * resetForm
   */
  public resetForm(id: string) {
    eval(`$('${id}').trigger('reset')`);
  }

}
