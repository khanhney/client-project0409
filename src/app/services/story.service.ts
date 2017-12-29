import { Injectable } from '@angular/core';
import { RequestWithToken } from './request-with-token.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()

export class StoryService {
    constructor(
        private request: RequestWithToken,
        private store: Store<AppState>,
        private router: Router
    ) { }

    addStory(content: string) {
        this.request.post('/story', { content })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
}
