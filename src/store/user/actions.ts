import { UserState, REMOVE_TOKEN, UserActionTypes, SET_USER } from './types';

// TypeScript infers that this function is returning SetUserAction
export function setUser(payload: UserState): UserActionTypes {
  return {
    type: SET_USER,
    payload,
  };
}

// TypeScript infers that this function is returning RemoveTokenAction
export function removeToken(): UserActionTypes {
  return {
    type: REMOVE_TOKEN,
  };
}
