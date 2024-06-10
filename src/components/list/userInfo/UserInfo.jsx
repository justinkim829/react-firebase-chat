import React from 'react';
import "./userInfo.css";

function UserInfo() {
  return (
    <div className='user-info'>
      <div className='user'>
        <img src="./avatar.png" alt="avatar" />
        <h2>Justin Kim</h2>
      </div>
      <div className='icons'>
        <img src="./more.png" alt="more" />
        <img src="./video.png" alt="video" />
        <img src="./edit.png" alt="edit" />
      </div>
    </div>
  )
}

export default UserInfo