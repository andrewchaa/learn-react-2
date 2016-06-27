export const ADD_USER = 'ADD_USER';

export default function(userName) {
   return {
       type: ADD_USER,
       userName
   }
}
