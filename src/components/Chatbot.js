// Chatbot.js
import React, { useState } from 'react';
import './styles/ChatbotStyles.css'; // Import custom CSS
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (userInput) => {
    if (userInput.trim() === "") return; // Prevent sending empty messages
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);

    setTimeout(() => {
      const chatbotResponse = { sender: 'bot', text: generateResponse(userInput) };
      setMessages(prevMessages => [...prevMessages, chatbotResponse]);
    }, 1000);
  };

  const generateResponse = (input) => {
    return `You said: "${input}". How can I assist further?`;
  };

  return (
    <div className="chatbot-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="chat-area">
          <ChatWindow messages={messages} />
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
