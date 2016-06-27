import './app.scss'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import ChatContainer from './chat/ChatContainer.jsx';
import messagesReducer from './chat/messagesReducer';
import messageTextReducer from './chat/messageTextReducer';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Layout from './Layout.jsx';
import LoginContainer from './login/LoginContainer.jsx';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './login/userReducer';

var reducers = {
   messages: messagesReducer,
   messageText: messageTextReducer,
   form: formReducer,
   user: UserReducer
};

var rootReducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

var configureStore = function configureStore(initialState) {
   const store = createStore(rootReducer, initialState, compose(
       applyMiddleware(
           thunkMiddleware,
           loggerMiddleware
       ),
       window.devToolsExtension ? window.devToolsExtension() : f => f
   ));
   return store;
};

render(

   <Provider store={configureStore()}>
     <Router history={hashHistory}>
        <Route path="/" component={Layout} >
            <IndexRoute component={LoginContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/chat" component={ChatContainer} />
        </Route>
     </Router>
   </Provider>,
   document.getElementById('app')
);

if (module.hot) {
   module.hot.accept();
}
