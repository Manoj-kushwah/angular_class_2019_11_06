import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint: string = "http://18.191.101.141/ng_test/public_html";
  private api: string = this.endPoint + "/api";

  constructor(private http: Http) { }

  /**
   * login
   */
  public login(email: string, password: string): Promise<any> {
    let url: string = this.api + "/user/login/"; //http://18.191.101.141/ng_test/public_html/api/user/login/
    console.log("ApiService: url ", url);
    let data: any = JSON.stringify({email: email, password: password});
    return this.http.post(url, data).toPromise().then(res=> {
      console.log("ApiService: res", res);
      return res.json();
    }).catch(err=> {
      console.log("ApiService: err", err);
      return err;
    })
  }

  /**
   * getUsers
   */
  public getUsers(): Promise<any> {
    let url: string = this.api + "/user/get/";
    return this.http.get(url).toPromise().then(res=>{
      console.log("ApiService: url ", url);
      return res.json();
    }).catch(err=>{
      return err;
    })
  }


  /**
   * addUser
   */
  public addUser(user: any): Promise<any> {
    let url: string = this.api + "/user/add/";
    let data: string = JSON.stringify({
      // "userId": "1",
      "email": user.email,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "gender": user.gender,
      "dob": user.dob,
      "role": user.role,
      "password": user.password
    });
    console.log("ApiService: url ", url, data);
    return this.http.post(url, data).toPromise().then(res=>{
      return res.json();
    }).catch(err=>{
      return err;
    })
  }


  /**
   * updateUser
   */
  public updateUser(user: any): Promise<any> {
    let url: string = this.api + "/user/update/";
    let data: string = JSON.stringify({
      "userId": user.userId,
      "email": user.email,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "gender": user.gender,
      "dob": user.dob,
      "role": user.role,
      "password": user.password
    });
    console.log("ApiService: url ", url, data);
    return this.http.post(url, data).toPromise().then(res=>{
      return res.json();
    }).catch(err=>{
      return err;
    })
  }

}

/**
function myFun(p1, p2){
  return null;
}
const myFun = (p1, p2) => {
  return null;
}
 */