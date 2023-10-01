import { Popup } from './components/popup';
import "./App.css";
import { Context } from './context';
import { useContext } from 'react';
import VideoRecorder from 'react-video-recorder';

function App() {
  const { closePopup } = useContext(Context);
  return (
    <>
      {
        closePopup ?
          <VideoRecorder
            onRecordingComplete={(videoBlob: any) => {
              // Do something with the video...
              console.log('videoBlob', videoBlob)
            }}
          />
          : <Popup />
      }
    </>
  );
}

export default App;
