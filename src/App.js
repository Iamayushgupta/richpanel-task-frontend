import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register'; 
import Login from './components/Login'; 
import PageConnect from './components/PageConnect'; 
import Conversation from './components/Conversation';
import Disconnect from  './components/Disconnect';

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (formData) => {
    console.log('Register with', formData);
    setUser({ ...formData }); 
  };

  const handleLogin = (formData) => {
    console.log('Login with', formData);
    setUser({ ...formData }); 
  };

  const handleConnectPage = () => {
    console.log('Connect Facebook Page');
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={user ? <Navigate replace to="/connect" /> : <Register onRegister={handleRegister} />} />
          <Route path="/login" element={user ? <Navigate replace to="/connect" /> : <Login onLogin={handleLogin} />} />
          <Route path="/disconnect" element={user ? <Navigate replace to="/connect" /> : <Disconnect />} />
          <Route path="/connect" element={!user ? <Navigate replace to="/disconnect" /> : <PageConnect onConnectPage={handleConnectPage} />} />
          <Route path="/conversations" element={<Conversation messages={[]} onReply={() => {}} />} />
          <Route path="/" element={user ? <Navigate replace to="/connect" /> : <Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
