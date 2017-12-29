import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['pho@gmail.com', Validators.email],
      password: ['123', Validators.required],
      name: ['Teo', Validators.required]
    });
  }

  onSubmit() {
    this.userService.signUp(this.formSignUp.value);
  }
}
