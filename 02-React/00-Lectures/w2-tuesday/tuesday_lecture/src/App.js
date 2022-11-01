import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from './components/Pokemon'
import Superhero from './components/Superhero';
// https://akabab.github.io/superhero-api/api/
function App() {
  const [superheroes, setSuperheroes] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [title, setTitle] = useState("SuperHeroes API")
  const [current, setCurrent] = useState(-1)

  // useEffect(() => {
  //   fetchPokemonAxios()
  // }, [])
  

  const fetchPokemonAxios = () => {
    setCurrent(1)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        // ! axios wraps everything in its own obj .data
        setPokemon(response.data.results)
        setTitle("Pokemon API")
      })
      .catch(err => console.log(err))
  }

  //classic way to fretch APIs
  const fetchSuperHeroes = () => {
    setCurrent(0)
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        return response.json()
      })
      .then(response => {
        setSuperheroes(response)
        setTitle("Superheroes API")
        
      })
      .catch(err => {
        console.log("ERROR " + err)
      })
  }

  const renderer = () => {
    if(current===0){
      <Superhero superheroes={superheroes} />
    }

    if(current===1){
      <Pokemon pokemon={pokemon} />
    }
  }

  return (
    <div className="container">

      <div className="App">
        <h1>{title}</h1>
        <button onClick={fetchSuperHeroes}>Fetch Superhoes</button>
        <button onClick={fetchPokemonAxios}>Fetch Pokemon</button>
      </div>
      {(current===0) ? <Superhero superheroes={superheroes} /> : <Pokemon pokemon={pokemon} />}

      

    </div>
  );
}

export default App;
