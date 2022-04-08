import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import './App.scss';
import MissionList from './components/MissionList';
import RocketList from './components/RocketList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RocketList />} />
          <Route path="/Missions" element={<MissionList />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
