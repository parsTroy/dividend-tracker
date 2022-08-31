import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import FutureValue from './components/FutureValue/FutureValue';
import UpComingDividends from './components/UpComingDividends/UpComingDividends';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header className='header' />
        <SubHeader className='subHeader' />

        <Dashboard />

        {/* <Routes> */}

        {/* <Route path="/" element={<Dashboard />}/> */}

        {/* <Route path="/futurevalue" element={<FutureValue />}/>

        <Route path="/upcomingdividends" element={<UpComingDividends />}/> */}

        {/* </Routes> */}
        
        <Footer className='footer' />
      </div>
    </div>
  );
}

export default App;
