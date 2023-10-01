import { Popup } from './components/popup';
import "./App.css";
import { Context } from './context';
import { useContext } from 'react';

function App() {
  const { closePopup } = useContext(Context);
  return (
    <>
      {
        closePopup ? null : <Popup />
      }
    </>
  );
}

export default App;
