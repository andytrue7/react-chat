import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MessageInput.css';

const MessageInput = ({ onMessageAdded }) => {

    const [text, setText] = useState('');

    const onTextChange = (e) => {
        let newText = e.target.value;
        setText(newText);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onMessageAdded(text);
        setText('');
    }

    return (
    <div className='chat-input-group'>
        <form onSubmit={ onSubmit } className='chat-form'>
            <input type="text" value={text} onChange={ onTextChange }/>
            <button type='submit'>Send</button>
        </form>
    </div>
  );
}

MessageInput.propTypes = {
  onMessageAdded: PropTypes.func
}

export default MessageInput;