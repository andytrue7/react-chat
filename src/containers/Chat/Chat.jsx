import React, { useState, useEffect } from 'react';
import './Chat.css';
import Header from '../../components/Header/Header.jsx';
import MessageList from '../../components/Messages/MessageList/MessageList.jsx';
import MessageInput from '../../components/Messages/MessageInput/MessageInput';
import Spinner from '../../components/Spinner/Spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessages, addMessage, updateMessage, deleteMessage, likeMessage } from './actions';

const Chat = ({ messages, getMessages, addMessage, updateMessage, deleteMessage, likeMessage  }) => {

  // const [ chatData, setChatData ] = useState([]);
  //const [ loading, setLoading ] = useState(true);

  useEffect( () => {
      getMessages();
  });

  const countMessages = () => {
    return messages.length;
  }

  return (
    <div className='wrapper'>
      <Header
          messagesCount={ countMessages }
      />

     <MessageList
        data={ messages }
        onDeleted={ deleteMessage }
        onUpdated={ updateMessage }
        onLiked={ likeMessage }
      />

      <MessageInput onMessageAdded={ addMessage }/>
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.messages
});

const actions = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage,
    likeMessage
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);