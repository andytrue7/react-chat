import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = ({ userId, user, avatar, text, onDeleted, onUpdated, createdAt, onLiked }) => {

  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState('');
  const [like, setLike] = useState(false);

  const deleteButton = <button onClick={ onDeleted }>Delete</button>;

  const onLikeHandler = () => {
      setLike(!like);
      onLiked(like);
  }

  const createEditForm = () => {
      return (
          <span>
              {
                  userId ==="1" && !editMode && <button onClick={ () => setEditMode(true) }>Edit</button>
              }
              {
                  userId ==="1" && editMode && <input autoFocus={ true } onBlur={ () => setEditMode(false) } type="text" onChange={ onUpdatedTextChange } value={ updatedText }/>
              }
          </span>
      );
  }

  const formatDate = () => {
      let date = new Date(Date.parse(createdAt));
      return date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getHours() + ':' + date.getMinutes();
  }

  const onUpdatedTextChange = (e) => {
      let text = e.target.value;
      onUpdated(text);
      setUpdatedText(text);
  }

  return (
    <div className='message-block'>
        <div className='message-left-column'>
            { userId !== "1" && <img src={ avatar } className='message-img' alt=""/>}
        </div>
        <div className='message-right-column'>
            <span className='message-name'>{ user }</span>
            <span className='message-time'>{ formatDate() }</span>
            <p className='message-text'>{ text }</p>
            { createEditForm()}
            <span>{ userId === "1" && deleteButton }</span>
            <span>
                { userId !=="1" && <button className={ like ? 'like-button' : null } onClick={ onLikeHandler }>Liked</button> }
            </span>
        </div>
    </div>
  );
}

Message.propTypes = {
  userId: PropTypes.string,
  user: PropTypes.string,
  avatar: PropTypes.string,
  text: PropTypes.string,
  onDeleted: PropTypes.func,
  onUpdated: PropTypes.func,
  createdAt: PropTypes.string,
  onLiked: PropTypes.func

}

export default Message;