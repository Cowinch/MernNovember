import './App.css';
import { Routes, Route } from 'react-router-dom'
import Display from './components/Display';
import Form from './components/Form';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Display/>} />
        <Route path="/new" element={<Form name={""}/>}  />
        <Route path="/edit/:authorId" element={<Form/>}  />
        <Route path="/404" element={<NotFound/>}  />
      </Routes>
    </div>
  );
}

export default App;
