import './App.css';
import Form from './components/Form'
import React, {useState} from 'react';
import PeopleDisplay from './components/PeopleDisplay';
function App() {

  const [people, setPeople] = useState([
    {
        name: "toad",
        age: 40
    },
    {
        name: "Mario",
        age: 40
    },
    {
        name: "Luigi",
        age: 30
    },

    
  ])

  const addToState = (newUser) => {
    setPeople(newUser)
  }

  return (
    <div className="App">
      {JSON.stringify(people)}
      <h1>revuew forms and state</h1>
      <Form addToState={addToState}/>
      <PeopleDisplay people={people}  />
    </div>
  );
}

export default App;
