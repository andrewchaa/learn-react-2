import React, { PropTypes } from 'react';

const MessageInput = (props) => {
  const { messageText, onMessageTextChage, onAddMesssage } = props;
  return (
    <div>
      <input type="text"
        value = {messageText}
        onChange = { (event) => onMessageTextChage (event.target.value)} />
      <button onClick = { () => onAddMesssage(messageText) }>Add</button>
    </div>
  )
};

MessageInput.propTypes = {
  messageText: PropTypes.string.required
}


export default MessageInput;
