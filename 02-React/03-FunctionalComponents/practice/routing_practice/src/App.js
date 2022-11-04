import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from './components/Form';
import Home from './components/Home';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:word" element={<Word/>}/>
        <Route path="/:word/:wordColor" element={<Word/>}/>
        <Route path="/:word/:wordColor/:bgColor" element={<Word/>}/>
      </Routes>
    </div>
  );
}

export default App;
