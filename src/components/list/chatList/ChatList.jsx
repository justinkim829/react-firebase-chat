import React, { useState } from 'react';
import "./chatList.css";
import AddUser from './addUser/AddUser';

function ChatList() {

  // is add mode clicked next to search input
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chat-list'>
      <div className='search'>
        <div className='search-bar'>
          <img src="search.png" alt="search" />
          <input type="text" placeholder='Search'/>
        </div>
        <img src={addMode ? "minus.png" : "plus.png"} alt="plus"
             className='add'onClick={() => setAddMode(prev => !prev)}/>
      </div>
      <div className="item">
          <img src="avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jayden</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jayden</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jayden</span>
            <p>Hello</p>
          </div>
        </div>
        {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList