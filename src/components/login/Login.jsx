import './login.css';
import React, {useState} from 'react';

function Login() {

  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome Back</h2>
        <form>
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
          <label htmlFor="file">Upload an Image
            <img src="" alt="" />
          </label>
          <input type="file" id="file" style={{display: "none"}}/>
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
