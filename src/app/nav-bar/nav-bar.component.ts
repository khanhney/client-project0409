import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [UserService]
})
export class NavBarComponent implements OnInit {

  constructor(private user: UserService) {}

  ngOnInit() {
  }

  logOut() {
    this.user.logOut();
  }
}
