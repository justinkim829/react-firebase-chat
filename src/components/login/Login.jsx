import './login.css';
import {useState} from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase.js";
import { doc, setDoc } from "firebase/firestore";

function Login() {

  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  function handleAvatar(evt) {
    if (evt.target.files) {
      setAvatar({
        file: evt.target.files[0],
        url: URL.createObjectURL(evt.target.files[0])
      });
    }
  }

  function handleLogin(evt) {
    evt.preventDefault();
    toast.warn("Hello");
  }

  async function handleCreateAccount(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const { username, password, email } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        blocked: []
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: []
      });

      toast.success("Account successfully created!")
    } catch(err) {
      console.error(err);
      toast.error(err.message);
    }
  }

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <button>Sign In</button>
        </form>
      </div>
      <div className="seperator">

      </div>
      <div className="item">
        <h2>Create An Account</h2>
        <form onSubmit={handleCreateAccount}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="create profile image" />
            Upload an Image
          </label>
          <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
          <input type="text" placeholder='Username' name='username'/>
          <input type="text" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
