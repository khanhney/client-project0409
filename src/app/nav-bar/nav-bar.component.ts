import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';
import { AppState } from '../types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [UserService]
})
export class NavBarComponent implements OnInit {
  user: Observable<any>;
  constructor(private userService: UserService, private store: Store<AppState>) {}

  ngOnInit() {
    this.user = this.store.select('user');
  }

  logOut() {
    this.userService.logOut();
  }
}
