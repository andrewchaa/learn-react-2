import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import LoginForm from './LoginForm.jsx'
import addUserAction from './addUserAction';

// const onAddUser = () => {
//     console.log('onSubmit');
// };

var LoginContainer = (props) => <LoginForm {...props}/>;

function mapStateToProps(state) {
   return {
       user: state.user
   };
}

const mapDispatchToProps = function(dispatch){
   return {
       onAddUser: (userName) => {
          dispatch(addUserAction(userName));
       }
   }
};

export default LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
