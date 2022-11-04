import './App.css'
import Display from './components/Display'
import Form from './components/Form'
import React, {useState} from 'react'
function App() {

  const animalsArray = ["Lion", "Monkey", "Horse", "Bird"]
  const [animals, setAnimals] = useState(animalsArray)
  return (
    <div className="App">
      <Display animals={animals} />
      <Form />
    </div>
  );
}

export default App;
