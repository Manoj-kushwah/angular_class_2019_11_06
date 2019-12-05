import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  /**
   * login
   */
  public login(email: string, password: string): Promise<any> {
    let url: string = "https://jsistudentportal.000webhostapp.com/api/user/login/";
    let query: string = "?email=".concat(email, "&password=", password);
    console.log("ApiService: query ", query);
    console.log("ApiService: url ", url + query);
    return fetch(url + query).then(res=> {
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
    let url: string = "https://jsistudentportal.000webhostapp.com/api/user/get/";
    return fetch(url).then(res=>{
      console.log("ApiService: url ", url);
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