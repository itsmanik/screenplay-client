import './App.css';
import Chatbot from './components/Chatbot';
import Markdown from './components/Markdown';
import Layout from './components/Layout';
import Error404 from './components/Error404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Chatbot />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="scene/1" element={<Markdown />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes> 
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);