export interface ServerResponse {
    success: boolean;
    [propName: string]: any;
}

export interface User {
    name: string;
    token: string;
    email: string;
}

export interface Story {
    _id: string;
    content: string;
    author: { name: string };
    fans: [{ name: string }];
}

export interface AppState {
    user: User;
    stories: Story[];
}

export interface Action {
    type: string;
    payload: any;
}

