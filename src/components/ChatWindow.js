// ChatWindow.js
import React from 'react';
import './ChatWindowStyles.css'; // Import CSS for styling
import { FaUser, FaRobot } from 'react-icons/fa'; // Import icons from react-icons

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          {msg.sender === 'user' ? <FaUser className="icon" /> : <FaRobot className="icon" />}
          <div className="message-bubble">{msg.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
