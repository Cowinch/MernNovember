import './App.css';
import { Routes, Route } from 'react-router-dom'
import Display from './components/Display';
import Form from './components/Form'
function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path="/" element={
          <div>
              <p style={{textAlign: "center"}}>Look up something in the Star Wars API!</p>
          </div>
        }/>
        <Route path="/:type/:id" element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
