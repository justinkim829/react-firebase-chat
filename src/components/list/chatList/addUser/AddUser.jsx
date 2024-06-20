import { useState } from 'react';
import "./add-user.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

function AddUser() {

  const [user, setUser] = useState(null);

  // No problems in handleSearch
  async function handleSearch(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch(err) {
      console.error(err);
    }
  }

  async function handleAdd() {
    const chatRef = collection(db, "chats");

    try {
      console.log(1);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className='add-user'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Username' name='username'/>
        <button>Search</button>
      </form>
      {user && <div className="user">
        <div className="detail">
          <img src={user.avatar || "./avatar.png"} alt="avatar" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>}
    </div>
  )
}

export default AddUser;
