import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import BoxContainer from './components/BoxContainer';

function App() {
  const [boxes, setBoxes] = useState([
    {
      color: "red",
      text: ""
    },
    {
      color: "green",
      text: ""
    },
    {
      color: "blue",
      text: "text"
    },
  ])

  const addBoxColor = (newBox) => {
    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      <Form addBoxColor={addBoxColor}/>
      <BoxContainer boxes={boxes} />
    </div>
  );
}

export default App;
