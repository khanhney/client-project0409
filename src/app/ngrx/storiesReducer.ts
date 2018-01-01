import { Story, Action } from '../types';

export function storiesReducer(state = [], action: Action) {
    if (action.type === 'SET_STORIES') return action.payload.stories;
    if (action.type === 'ADD_STORY') return [action.payload.story, ...state];
    return state;
}
