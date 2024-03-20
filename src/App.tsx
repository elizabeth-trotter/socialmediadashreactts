import React from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';
import OverviewComponent from './Components/OverviewComponent';

function App() {
  return (
    <main className='px-7 pt-8 max-w-7xl mx-auto'>
      <HeaderComponent />
      <MainComponent />
      <OverviewComponent />
    </main>
  );
}

export default App;
