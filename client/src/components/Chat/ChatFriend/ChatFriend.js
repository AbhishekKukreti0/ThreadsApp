import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function ChatFriend({ user }) {
  return (
    <div className="chat__box__message__friend">
      <div className="chat__box__message__friend__profile">
        <Link
          to={`/profile/${user.id}`}
          className="chat__box__message__friend__profile__img"
        >
          <img src={`${axios.defaults.baseURL}${user.profileImage}`} />
        </Link>
        <Link
          to={`/profile/${user.id}`}
          className="chat__box__message__friend__profile__name"
        >
          {user.userName.split(' ')[0]}
        </Link>
      </div>
      <div className="chat__box__message__friend__text">{user.text}</div>
    </div>
  );
}

export default ChatFriend;
