import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/Pages/HomePage';
import { Profile } from './components/Pages/Profile';
import {Sidebar} from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home"/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/explore" element={<Header title="Explore"/>} />
          <Route path="/user" element={<Profile/>} />
          <Route path="/notifications" element={<h1>Notifications Page</h1>} />
          <Route path="/messages" element={<h1>Messages Page</h1>} />
          <Route path="/i/bookmarks" element={<h1>Bookmarks Page</h1>} />
          <Route path="/user/lists" element={<h1>Lists Page</h1>} />
        </Routes>
      </div>
      <Sidebar hasSearch={true}/>
    </Router>
  );
}

export default App;