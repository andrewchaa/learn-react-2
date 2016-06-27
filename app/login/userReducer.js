import { ADD_USER } from './addUserAction';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userName: action.userName
      };
    default:
      return state;
  }
}
