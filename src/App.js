import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/Pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/explore" element={<h1>Explore Page</h1>} />
          <Route path="/user" element={<h1>Profile Page</h1>} />
          <Route path="/notifications" element={<h1>Notifications Page</h1>} />
          <Route path="/messages" element={<h1>Messages Page</h1>} />
          <Route path="/i/bookmarks" element={<h1>Bookmarks Page</h1>} />
          <Route path="/user/lists" element={<h1>Lists Page</h1>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;