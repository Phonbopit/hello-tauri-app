import { Routes, Route } from 'react-router-dom';

import './App.css';

import SplashScreenPage from './pages/SplashScreenPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="splashscreen" element={<SplashScreenPage />} />
      </Routes>
    </div>
  );
}

export default App;
