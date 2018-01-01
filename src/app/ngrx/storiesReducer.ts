import { Story, Action } from '../types';

export function storiesReducer(state: Story[] = [], action: Action) {
    if (action.type === 'SET_STORIES') return action.payload.stories;
    if (action.type === 'ADD_STORY') return [action.payload.story, ...state];
    if (action.type === 'UPDATE_STORY') return state.map(s => {
        if (s._id !== action.payload.story._id) return s;
        return action.payload.story;
    });
    return state;
}
