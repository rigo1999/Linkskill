import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import VideoNoteTaker from "./pages/videoPage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video" element={<VideoNoteTaker videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

