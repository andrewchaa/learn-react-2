import { ADD_MESSAGE } from './addMessageAction';

const initialState = [
];

export default (state = initialState, action) => {
   switch(action.type) {
     case ADD_MESSAGE:
      return [
        ...state,
        action.message
      ];
      default:
        return state;
   }
}
