export interface ServerResponse {
    success: boolean;
    [propName: string]: any;
}

export interface User {
    name: string;
    token: string;
    email: string;
}

export interface AppState {
    user: User;
}

export interface Action {
    type: string;
    payload: any;
}
