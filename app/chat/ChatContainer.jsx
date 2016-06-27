import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';
import changeMessageTextAction from './changeMessageTextAction';
import addMessageAction from './addMessageAction';
import clearMessageAction from './clearMessageAction';

class ChatContainer extends React.Component {
  render() {
         return (
             <div>
                 <MessageList {...this.props} />
                 <MessageInput {...this.props} />
             </div>
         )
     }
}

const mapDispatchToProps = function(dispatch){
  return {
     onMessageTextChage: (text) => dispatch(changeMessageTextAction(text)),
     onAddMesssage: (text) => {
       dispatch(addMessageAction(text));
       dispatch(clearMessageAction());
     }
   }
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    messageText: state.messageText
  }
}

ChatContainer = connect(mapStateToProps, mapDispatchToProps) (ChatContainer);

export default ChatContainer;
