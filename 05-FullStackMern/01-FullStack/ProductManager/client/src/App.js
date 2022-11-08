import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form'
import ProductList from './components/ProductList';
import OneProduct from './components/OneProduct';
import Home from './container/Home';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/:productId" element={<OneProduct/>}/>
        <Route path="/edit/:productId" element={<UpdateProduct/>} />
      </Routes>
    </div>
  );
}

export default App
