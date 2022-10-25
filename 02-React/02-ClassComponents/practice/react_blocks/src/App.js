import React from 'react';
import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className='wrap'>
      <div className="app">
        <Header />
        <div className='row'>
          <Navigation />
          <Main>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;

