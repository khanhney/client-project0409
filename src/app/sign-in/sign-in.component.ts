import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formSignIn = this.fb.group({
      username: ['vanpho01@gmail.com', Validators.email],
      password: ['123456', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formSignIn.value);
  }
}
