import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazily load the components
const Dashboard = lazy(() => import('./Components/Dashboard'));
const Landing = lazy(() => import('./Components/Landing'));

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter should wrap the whole app */}
      <div>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
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
