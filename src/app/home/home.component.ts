import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, User } from '../types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user = this.store.select('user');
  }

}
