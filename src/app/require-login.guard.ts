import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { User, AppState } from './types';
import 'rxjs/Rx';

@Injectable()
export class RequireLoginGuard implements CanActivate {
  user: Observable<User>;
  constructor(private store: Store<AppState>, private router: Router) {
    this.user = this.store.select('user');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return Observable.from(this.user).map(u => !!u);
  }
}
