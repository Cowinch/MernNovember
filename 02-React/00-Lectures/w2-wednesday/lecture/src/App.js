import './App.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Other from './components/Other';
import Main from './components/Main';
import ErrorPage from './components/ErrorPage';
import Hero from './components/Hero';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <Link to={"/"}>Link Home </Link> |
      <Link to={"/other"}>Other</Link>
      <Form />

      <Routes>
        <Route path="/other" element={<><Other/><Main/></>}/>

        <Route path="hero/:heroId" element={<Hero/>}/>
        <Route path="/" element={<Main/>}/>

        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </div>
  );
}

export default App;
