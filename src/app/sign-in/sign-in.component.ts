import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: ['vanpho01@gmail.com', Validators.email],
      password: ['123456', Validators.required]
    });
  }

  onSubmit() {
    this.userService.signIn(this.formSignIn.value);
  }
}
