import { Component, OnInit } from '@angular/core';

import Account from '../services/Account';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  signIn: boolean = true;

  email: string = '';
  password: string = '';
  confPassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateSignIn(): void {
    this.signIn = !this.signIn;
  }

  changeEmail(email: string): void {
    this.email = email;
  }

  changePassword(password: string): void {
    this.password = password;
  }

  changeConfPassword(confPassword: string): void {
    this.confPassword = confPassword;
  }

  checkInputs(): void {
    if (this.signIn) {
      this.checkLoginInputs();
    } else {
      this.checkRegisterInputs();
    }
  }

  checkLoginInputs(): void {
    if (!!this.email && !!this.password) {
      Account.login({
        email: this.email,
        password: this.password,
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      });
    } else {
      console.log('Impossible');
    }
  }

  checkRegisterInputs(): void {
    if (!!this.email && !!this.password && this.password === this.confPassword) {
      Account.register({
        email: this.email,
        password: this.password,
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      });
    } else {
      console.log('Impossible');
    }
  }

}
