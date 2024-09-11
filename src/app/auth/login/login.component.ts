import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('logoAnimation', [
      state('start', style({
        transform: 'scale(3)',
        opacity: 1
      })),
      state('end', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('start => end', [
        animate('1s')
      ])
    ]),
    trigger('formAnimation', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('1s')
      ])
    ])
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  passwordFieldType: string = 'password';
  logoState: string = 'start';
  formState: string = 'hidden';

  constructor() {
    // Trigger animations after component is initialized
    setTimeout(() => {
      this.logoState = 'end';
      setTimeout(() => {
        this.formState = 'visible';
      }, 1000);
    }, 1000);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  signIn() {
    // Handle sign-in logic here
  }
}