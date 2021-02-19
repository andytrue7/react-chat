import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message.jsx';
import './MessageList.css';

const MessageList = ({ data, onDeleted, onUpdated, onLiked }) => {
  
  const myMessages = data.filter(item => item.userId === "1");
  const otherMessages = data.filter(item => item.userId !== "1");

  const myMessagesItems = myMessages.map(message => {
    const { id, ...messageProps } = message;
    return (
        <li key={ id }>
            <Message { ...messageProps }
                onDeleted={ () => onDeleted(id) }
                onUpdated={ (text) => onUpdated(id, text) }
            />
        </li>
    );
  });

  const otherMessagesItems = otherMessages.map(message => {
    const { id, ...messageProps } = message;
    return (
        <li key={id}>
            <Message {...messageProps}
                onLiked={ (isLike) => onLiked(id, isLike) }
            />
        </li>
    );
  });
  
  return (
    <div className='chat-content'>
      <div className='left-column'>
        <ul>
          { otherMessagesItems }
        </ul>
      </div>
      <div className='right-column'>
        <ul>
          { myMessagesItems }
        </ul>
      </div>
    </div>
  
  );
}

MessageList.propTypes = {
  data: PropTypes.instanceOf(Object),
  onDeleted: PropTypes.func,
  onUpdated: PropTypes.func,
  onLiked: PropTypes.func
}

export default MessageList;