import { UserState, REMOVE_TOKEN, UserActionTypes, SET_USER, SET_TOKEN } from './types';

const initialState: UserState = {
  userId: '',
  token: '',
  refreshToken: '',
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case SET_USER:
      console.log(SET_USER)
      const { userId, token, refreshToken } = action.payload;
      return {
        ...state,
        userId,
        token,
        refreshToken,
      };
    case REMOVE_TOKEN:
      return {
        userId: '',
        token: '',
        refreshToken: '',
      };
    default:
      return state;
  }
};

export default userReducer;
