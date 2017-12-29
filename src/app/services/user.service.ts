import { Injectable } from '@angular/core';
import { RequestWithToken } from './request-with-token.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()

export class UserService {
    constructor(
        private request: RequestWithToken,
        private store: Store<AppState>,
        private router: Router
    ) {}

    signIn(value) {
        this.request.post('/user/signin', value)
        .then(res => {
          if (!res.success) alert(res.messsage);
          const user = {
            email: res.response.user.email,
            name: res.response.user.name,
            token: res.response.token
          };
          this.store.dispatch({ type: 'SET_USER', payload: { user } });
          this.router.navigate(['/profile']);
        });
    }

    logOut() {
        localStorage.removeItem('token');
        this.store.dispatch({ type: 'SET_USER', payload: { user: null } });
        this.router.navigate(['/signin']);
    }
}
