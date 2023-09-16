import './App.css';
import { Dashboard } from './pages/dashboard';
import { LandingPage } from './pages/landingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/movies/:id' element={<Dashboard />}></Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
