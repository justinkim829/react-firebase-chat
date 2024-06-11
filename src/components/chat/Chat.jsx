import { useState } from 'react'
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

function Chat() {

  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  function handleEmoji(evt) {
    setText(prev => prev + evt.emoji);
    setOpenEmoji(false);
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="avater" />
          <div className="texts">
            <span>Jayden</span>
            <p>User Information Placeholder</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="phone" />
          <img src="/video.png" alt="video" />
          <img src="/info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              This is just a random message for a placeholder.
              The universe is mine.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <p>
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
            This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <img src="https://ih1.redbubble.net/image.1943002440.4467/pp,840x830-pad,1000x1000,f8f8f8.u2.jpg" alt="random image" />
            <p>
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
              This is just a random message for a placeholder.
              The universe is mine.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input type="text" placeholder='Enter a message...'
               value={text} onChange={evt => setText(evt.target.value)}/>
        <div className="emoji">
          <img src="emoji.png" alt="emoji"
               onClick={() => setOpenEmoji((prev) => !prev)}/>

          <div className="picker-container">
          <EmojiPicker open = {openEmoji}
                       onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='send-btn'>Send</button>
      </div>
    </div>
  )
}

export default Chat
