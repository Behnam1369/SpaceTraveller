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
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Missions" element={<MissionList />} />
          <Route path="/Rockets" element={<RocketList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
