import './login.css';
import {useState} from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import upload from '../../lib/upload.js';

function Login() {

  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const [loading, setLoading] = useState(false);

  function handleAvatar(evt) {
    if (evt.target.files) {
      setAvatar({
        file: evt.target.files[0],
        url: URL.createObjectURL(evt.target.files[0])
      });
    }
  }

  async function handleLogin(evt) {
    evt.preventDefault();
    setLoading(true);
    const formData = new FormData(evt.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateAccount(evt) {
    evt.preventDefault();
    setLoading(true);
    const formData = new FormData(evt.target);
    const { username, password, email } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
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
          <button disabled={loading}>{loading ? "Creating Account" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
