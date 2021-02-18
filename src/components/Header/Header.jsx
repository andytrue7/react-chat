import React from 'react';
import './Header.css';

const Header = ({ messagesCount }) => {
  return (
    <div className='header'>
      <h3>My chat</h3>
      <span>23 participants</span>
      <span>{ messagesCount() } messages</span>
      <span>last message at 14:58 </span>
    </div>
  );
}

export default Header;