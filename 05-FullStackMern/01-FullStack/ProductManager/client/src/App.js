import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form'
import ProductList from './components/ProductList';
import OneProduct from './components/OneProduct';
import Home from './container/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/:productId" element={<OneProduct/>}/>
      </Routes>
    </div>
  );
}

export default App
