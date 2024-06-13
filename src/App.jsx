import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useUserStore } from "./lib/userStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {

  // Tracks the user associated to the website
  const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <div className='container'>
      {currentUser ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  )
}

export default App