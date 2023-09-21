import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Gallery } from './components/gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Gallery />}></Route>
        {/* <Route></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
