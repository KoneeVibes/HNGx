import './App.css';
import { Dashboard } from './pages/dashboard';
import { LandingPage } from './pages/landingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/movies/:id' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
