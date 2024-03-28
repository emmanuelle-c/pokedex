import PokemonCard from "./components/PokemonCard/PokemonCard";
import { useState} from "react";
import "/Users/Manue_1/Documents/WCS-02:24/quetes/quetes_react/pokedex/src/App.css";
import NavBar from "./components/NavBar/NavBar"
import { useEffect } from "react";

function App() {

  useEffect( ()=>{
      alert("hello pokemon trainer :)")
  },
  []
  );

  const [pokemonIndex, setPokemon] = useState(0);

  const handleClick = (index) => {
    setPokemon(index);
    if (index === 3){
      alert("pika pikachu !!!")
    }
  }

  return (
    <div>
      <NavBar pokemonList= {pokemonList} handleClick= {handleClick} pokemonIndex= {pokemonIndex}/>
      <PokemonCard pokemon ={pokemonList[pokemonIndex]}/>
    </div>
  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



export default App;
