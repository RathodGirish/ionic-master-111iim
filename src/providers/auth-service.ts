import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  id: string;
  role_id: string;
  store_id: string;
  company_id: string;
  username: string;
  email: string;
  constructor() {
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  constructor() { }

  /*
  TODO : To Registert User
  Method : register
  */
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  /*
  TODO : To Get User Information from localstorage
  Method : getUserSessionInfo
  */
  public getUserSessionInfo(): User {
    // return this.currentUser;
    return JSON.parse(localStorage.getItem('currentUser'))
  }

  /*
  TODO : To Set User Information to localstorage
  Method : setCurrentUser
  */
  public setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  /*
  TODO : To logout user and expire session.
  Method : logout
  */
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
      observer.next(true);
      observer.complete();
    });
  }

}