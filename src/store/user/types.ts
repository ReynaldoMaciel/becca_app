// Type of Initial State
export interface UserState {
  userId: string;
  token: string;
  refreshToken: string;
}

// Type of action's type
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

interface SetUserAction {
  type: typeof SET_USER;
  payload: UserState;
}

interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: {
    token: string
  };
}

interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
}

export type UserActionTypes = SetUserAction | SetTokenAction | RemoveTokenAction;
