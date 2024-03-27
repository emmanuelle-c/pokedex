import PokemonCard from "./components/PokemonCard/PokemonCard";
import { useState} from "react";
import "/Users/Manue_1/Documents/WCS-02:24/quetes/quetes_react/pokedex/src/App.css";
import NavBar from "./components/NavBar/NavBar"

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex +1);
  };

  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex -1);
  };

  return (
    <div>
      <NavBar pokemonIndex = {pokemonIndex} pokemonList= {pokemonList} handleNextClick= {handleNextClick} handlePreviousClick= {handlePreviousClick}/>
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
