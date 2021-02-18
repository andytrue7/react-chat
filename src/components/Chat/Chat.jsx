import React, { useState, useEffect } from 'react';
import './Chat.css';
import Header from '../Header/Header.jsx';
import MessageList from '../Messages/MessageList/MessageList.jsx';
import MessageInput from '../Messages/MessageInput/MessageInput';
import getResource from '../../store/store';
import Spinner from '../Spinner/Spinner';

const Chat = () => {

  const generateId = () => new Date().valueOf();

  const [ chatData, setChatData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect( () => {
      getResource()
        .then((data) => {
          setChatData(data); 
          setLoading(false);
        });
  },[]);

  const createMessageItem = (text) => {
      return {
          id: generateId(),
          userId: "1",
          user: 'Andy',
          text,
          createdAt: new Date().toISOString()
      }
    }

  const addMessage = (text) => {
    const newMessageItem =  createMessageItem(text);
    const newMessageItemsArr = [...chatData, newMessageItem];
    setChatData(newMessageItemsArr);
  };

  const updateMessage = (id, text) => {
    const idx = chatData.findIndex(el => el.id === id);
    const updatedMessageItem = {...chatData[idx], text};
    const newMessageItemsArr = [...chatData.slice(0, idx), updatedMessageItem, ...chatData.slice(idx + 1)];
    setChatData(newMessageItemsArr);
  }

    const likeMessage = (id, isLike) => {
      const idx = chatData.findIndex(el => el.id === id);
      const likeMessageItem = {...chatData[idx], isLike};
      const newMessageItemsArr = [...chatData.slice(0, idx), likeMessageItem, ...chatData.slice(idx + 1)];
      setChatData(newMessageItemsArr);
    }

  const deleteMessage = (id) => {
      const idx = chatData.findIndex(el => el.id === id);
      const newMessageItemsArr = [...chatData.slice(0, idx), ...chatData.slice(idx + 1)];
      setChatData(newMessageItemsArr);
  }

  const countMessages = () => {
    return chatData.length;
  }

  return (
    <div className='wrapper'>
      <Header
          messagesCount={ countMessages }
      />
      { loading && <Spinner />}
      { 
        !loading 
        && <MessageList 
            data={ chatData } 
            onDeleted={ deleteMessage } 
            onUpdated={ updateMessage } 
            onLiked={ likeMessage } 
          />
      }     
      <MessageInput onMessageAdded={ addMessage }/>
    </div>
  );
};

export default Chat;