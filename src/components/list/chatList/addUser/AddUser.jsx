import React from 'react';
import "./add-user.css";

function AddUser() {
  return (
    <div className='add-user'>
      <form>
        <input type="text" placeholder='Username' name='username'/>
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="avatar" />
          <span>Jane</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  )
}

export default AddUser;
