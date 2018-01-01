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
        .then(res => {
            if (!res.success) return alert('Try again later');
            this.store.dispatch({
                type: 'ADD_STORY',
                payload: { story: res.story }
            });
        });
    }

    getAllStory() {
        this.request.get('/story')
        .then(res => {
            const { success, stories } = res;
            if (!success) return;
            this.store.dispatch({ type: 'SET_STORIES', payload: { stories } });
        });
    }

    toggleLike(_id: string, isLike) {
        this.request.put(`/like/${_id}`, { isLike: !isLike })
        .then(res => {
            if (!res.success) return alert('Try again later');
            this.store.dispatch({
                type: 'UPDATE_STORY',
                payload: { story: res.story }
            });
        });
    }
}
