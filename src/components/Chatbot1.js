import React, { useState } from 'react';
import './styles/ChatbotStyles.css'; // Import your custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim() === "") return;

    // Add user's message
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    
    // Simulate chatbot response
    setMessages(newMessages);

    setTimeout(() => {
      const chatbotResponse = { sender: 'bot', text: generateResponse(userInput) };
      setMessages(prevMessages => [...prevMessages, chatbotResponse]);
    }, 1000);

    // Clear input field
    setUserInput("");
  };

  const generateResponse = (input) => {
    return `You said: "${input}". How can I assist further?`;
  };

  return (
    <div className="chatbot-fullpage-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default Chatbot;
