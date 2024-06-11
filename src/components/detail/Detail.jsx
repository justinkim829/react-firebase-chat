import React from 'react'
import './detail.css';

function Detail() {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="avatar" />
        <h2>Jayden</h2>
        <p>Placeholder for user info</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="Arrow Down" />
          </div>
          <div className="photos">
            <div className="photo-item">
              <div className="photo-detail">
                <img src="./favicon.png" alt="Photo item" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="download" className='icon'/>
            </div>
            <div className="photo-item">
              <div className="photo-detail">
                <img src="./favicon.png" alt="Photo item" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="download" className='icon'/>
            </div>
            <div className="photo-item">
              <div className="photo-detail">
                <img src="./favicon.png" alt="Photo item" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="download" className='icon'/>
            </div>
            {/* <div className="photo-item">
              <div className="photo-detail">
                <img src="./favicon.png" alt="Photo item" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="download" className='icon'/>
            </div> */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <button>Block User</button>
        <button className='log-out'>Log Out</button>
      </div>
    </div>
  )
}

export default Detail