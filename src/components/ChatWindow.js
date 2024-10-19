// ChatWindow.js
import React from 'react';
import './styles/ChatWindowStyles.css'; // Import CSS for styling
import { FaUser, FaRobot , FaFilm } from 'react-icons/fa'; // Import icons from react-icons

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="no-messages">
          <FaFilm className="nomsgicon" />
          <div className="nomessage-bubble">Start using screenplay</div>
        </div>
      ) : (
        messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          {msg.sender === 'user' ? <FaUser className="msgicon" /> : <FaRobot className="msgicon" />}
          <div className="message-bubble">{msg.text}</div>
        </div>
        ))
      )}
    </div>
  );
};

export default ChatWindow;
