import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gallery } from './components/gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
