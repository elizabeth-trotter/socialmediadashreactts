import React from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';
import OverviewComponent from './Components/OverviewComponent';

function App() {
  return (
    <>
      <div className="bg-lightMode-very-pale-blue-top-bg-pattern dark:bg-darkMode-very-dark-blue-top-bg-pattern h-56 w-full absolute top-0 left-0" style={{zIndex: 0}}></div>
      <main className='px-7 pt-8 h-full lg:h-screen dark:bg-darkMode-very-dark-blue-bg'>
        <HeaderComponent />
        <MainComponent />
        <OverviewComponent />
      </main>
    </>
  );
}

export default App;
