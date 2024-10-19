import './App.css';
import Chatbot from './components/Chatbot';
import Markdown from './components/Markdown';
import Layout from './Layout';
import Error404 from './components/Error404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Chatbot />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="screenplay" element={<Markdown />} />
          <Route path="*" element={<Error404 />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;