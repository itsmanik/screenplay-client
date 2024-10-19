import './App.css';
import Chatbot from './components/Chatbot';
import Markdown from './components/Markdown';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Chatbot1 from "./components/Chatbot1";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Chatbot />} />
          {/* <Route path="/chatbot" element={<Chatbot1 />} /> */}
          <Route path="/screenplay" element={<Markdown />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;