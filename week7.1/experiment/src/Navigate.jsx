import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard';
import { Landing } from './Components/Landing';

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


function AppBar() {
  const navigate = useNavigate(); 

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing page</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default App;
