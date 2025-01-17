import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import LogIn from './pages/login.jsx';
import Register from './pages/register.jsx';
import Admin from './pages/admin.jsx';
import Header from './components/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/about" element={<About isAuthenticated={isAuthenticated} />} />
          <Route path="/login" element={<LogIn setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;