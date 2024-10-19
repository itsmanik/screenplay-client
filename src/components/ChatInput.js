// ChatInput.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './styles/ChatInputStyles.css'; // Import CSS for styling

const ChatInput = ({ onSend }) => {
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() === "") return;
    onSend(userInput);
    setUserInput("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default ChatInput;
