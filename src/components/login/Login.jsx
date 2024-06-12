import './login.css';
import {useState} from 'react';
import { toast } from 'react-toastify';

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
        <form>
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
