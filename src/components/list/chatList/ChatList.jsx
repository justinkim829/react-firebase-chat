import { useState, useEffect } from 'react';
import "./chatList.css";
import AddUser from './addUser/AddUser';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useUserStore } from '../../../lib/userStore';
import { db } from '../../../lib/firebase';

function ChatList() {

  // is add mode clicked next to search input
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const {currentUser} = useUserStore();


  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return {...item, user};
      });

      const chatData = await Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => {
      unsub();
    }
  }, [currentUser.id]);

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
      {chats.map((chat) => {
        <div className="item" key={chat.chatId}>
          <img src="avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jayden</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      })}
      {/* <div className="item">
        <img src="avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jayden</span>
          <p>Hello</p>
        </div>
      </div> */}
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList